<?php
/**
 * @author Hervé Guétin <www.linkedin.com/in/herveguetin>
 */

namespace Maddlen\ZermattDemo\Controller\Api;

use Magento\Customer\Model\Session;
use Magento\Framework\App\Action\HttpPostActionInterface;
use Magento\Framework\App\CsrfAwareActionInterface;
use Magento\Framework\App\Request\InvalidRequestException;
use Magento\Framework\App\RequestInterface;
use Magento\Framework\App\ResponseInterface;
use Magento\Framework\Controller\ResultFactory;
use Magento\Framework\Controller\ResultInterface;
use Magento\Framework\Exception\NotFoundException;

class Welcome implements HttpPostActionInterface, CsrfAwareActionInterface
{
    public function __construct(
        protected ResultFactory $resultFactory,
        protected Session       $customerSession
    )
    {
    }

    /**
     * Execute action based on request and return result
     *
     * @return ResultInterface|ResponseInterface
     * @throws NotFoundException
     */
    public function execute()
    {
        $response = $this->resultFactory->create(ResultFactory::TYPE_JSON);
        $customer = $this->customerSession->getCustomer();
        $response->setData(['message' => $this->customerSession->isLoggedIn() ? __('Welcome %1 %2', $customer->getFirstname(), $customer->getLastname()) : __('Default welcome msg!')]);
        return $response;
    }


    public function createCsrfValidationException(RequestInterface $request): ?InvalidRequestException
    {
        return null;
    }

    public function validateForCsrf(RequestInterface $request): ?bool
    {
        return true;
    }
}
