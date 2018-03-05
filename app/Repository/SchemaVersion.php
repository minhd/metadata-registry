<?php

namespace MinhD\Repository;

use Illuminate\Database\Eloquent\Model;
use MinhD\Uuids;

class SchemaVersion extends Model
{
    use Uuids;
    public $incrementing = false;
    public $fillable = ['title', 'data', 'status', 'schema_id'];

    const SUPERSEDED = "superseded";
    const CURRENT = "current";
}
