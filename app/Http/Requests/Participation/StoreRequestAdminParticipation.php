<?php

namespace App\Http\Requests\Participation;

use App\Http\Requests\BaseRequest;

class StoreRequestAdminParticipation extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'priority' => 'integer|required',
        ];
    }
}
