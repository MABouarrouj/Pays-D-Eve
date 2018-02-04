<?php

namespace PaysDeve\BackBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function homeAction()
    {
        return $this->render('PaysDeveBackBundle:Back:home.html.twig');
    }
    public function GamingAction()
    {
        return $this->render('PaysDeveBackBundle:Back:Gaming.html.twig');
    }

     public function UserAction()
    {
        return $this->render('PaysDeveBackBundle:Back:User.html.twig');
    }
    public function DatingAction()
    {
        return $this->render('PaysDeveBackBundle:Back:Dating.html.twig');
    }
    public function MatchingAction()
    {
        return $this->render('PaysDeveBackBundle:Back:Matching.html.twig');
    }
    public function MarketingAction()
    {
        return $this->render('PaysDeveBackBundle:Back:Marketing.html.twig');
    }
    public function ChatAction()
    {
        return $this->render('PaysDeveBackBundle:Back:Chat.html.twig');
    }
}
