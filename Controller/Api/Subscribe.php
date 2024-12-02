<?php
/**
 * @author Hervé Guétin <www.linkedin.com/in/herveguetin>
 */

namespace Maddlen\ZermattDemo\Controller\Api;

use Maddlen\ZermattForm\FormRules\FormRulesAbstract;
use Magento\Framework\Phrase;
use Magento\Framework\Validator\EmailAddress;
use Magento\Framework\Validator\NotEmpty;
use React\Promise\Promise;

class Subscribe extends FormRulesAbstract
{
    public function getSuccessMessage(): ?Phrase
    {
        return __('Fake subscription successful!');
    }

    public function redirectUrl(): string
    {
        return $this->url->getUrl('/');
    }

    public function rules(): array
    {
        return [
            'email' => [
                NotEmpty::class,
                EmailAddress::class
            ]
        ];
    }

    public function submitForm(): bool
    {
        new Promise(function ($resolve, $reject) {
            usleep(500000); // Simulating some work
            $resolve();
        });

        return true;
    }
}
