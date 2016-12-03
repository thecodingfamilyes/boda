<?php namespace App\Services;

use Illuminate\Http\Response;
use App\Guest;
use League\Csv\Writer;
use SplTempFileObject;

/**
 *
 */
class ExportService
{

    protected $response = null;

    public function __construct()
    {

    }

    public function output()
    {
        $guests = Guest::latest()->get();

        $writer = Writer::createFromFileObject(new SplTempFileObject());
        $writer->insertOne(['Id invitado', 'Fecha alta', 'Relación', 'Nombre', 'Tipo', 'Teléfono', 'Email', 'Ciudad origen', 'Necesita alojamiento', 'Comentarios']);

        $guests->each(function($guest) use ($writer) {
            $data = $guest->toArray();
            $assistants = array_get($data, 'data.asistentes');

            foreach ($assistants as $adata) {
                $row = [
                    array_get($data, 'id'),
                    array_get($data, 'created_at'),
                    array_get($data, 'data.relationship'),
                    array_get($adata, 'name'),
                    array_get($adata, 'type'),
                    array_get($data, 'data.phone'),
                    array_get($data, 'data.email'),
                    array_get($data, 'data.city'),
                    array_get($data, 'data.alojamiento') ? 'Si' : 'No',
                    array_get($data, 'data.note')
                ];

                $writer->insertOne($row);
            }
        });

        return $writer->output('asistentes.csv');
    }
}
