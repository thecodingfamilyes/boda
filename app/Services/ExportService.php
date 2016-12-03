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
        $writer->insertOne(['Id invitado', 'Fecha alta', 'Relación', 'Nombre', 'Tipo', 'Teléfono', 'Email', 'Ciudad origen', 'Necesita alojamiento']);

        $guests->each(function($guest) use ($writer) {
            $data = $guest->toArray();
            $assistants = array_get($data, 'data.asistentes');

            foreach ($assistants as $adata) {
                $row = [
                    array_get($data, 'id'),
                    array_get($data, 'created_at'),
                    array_get($data, 'relationship'),
                    array_get($adata, 'name'),
                    array_get($adata, 'type'),
                    array_get($data, 'phone'),
                    array_get($data, 'email'),
                    array_get($data, 'city'),
                    array_get($data, 'alojamiento') ? 'Si' : 'No'
                ];

                $writer->insertOne($row);
            }
        });

        return $writer->output('asistentes.csv');
    }
}
