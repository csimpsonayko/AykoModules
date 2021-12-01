<?php

namespace Ayko\DebugModule\Block;

class HelloWorld extends \Magento\Framework\View\Element\Template
{
    public function getWelcomeText()
    {
        return 'We are a Custom Block that extends Template extends \Magento\Framework\View\Element\Template';
    }
}
