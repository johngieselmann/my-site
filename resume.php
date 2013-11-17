<?php
/**
 * This class is used to give insight into my development/nerd credentials.
 * 
 * @author John Gieselmann <john.gieselmann@gmail.com>
 */
class DevCred
{
    /**
     * @var arr $_skillSet A scale of languages, skills, and the like that
     * the applicant currently posses. The scale is as follows:
     * 1 = heard of it
     * 2 = used it
     * 3 = comfortable using it
     * 4 = proficient
     * 5 = bees knees
     */
    private $_skillSet = array(

        //back-end development
        "backEndDev" => array(
            "PHP"   => 4,
            "MySQL" => 4,
        ),

        //back-end frameworks / plugins
        "backEndFrameworks" => array(
            "Zend"   => 4,
            "CakePHP"   => 3,
            "Laravel"   => 2,
            "WordPress" => 2,
        ),

        //server interactions
        "server" => array(
            "Ubuntu" => 3,
            "CentOS" => 3,
            "Shell"  => 3,
        ),

        //front-end development
        "frontEndDev" => array(
            "JavaScript" => 4,
            "HTML5"      => 4,
            "CSS"        => 4,
        ),

        //front-end frameworks / structures
        "frontEndFrameworks" => array(
            "jQuery"                    => 4,
            "JS function classes"       => 4,
            "JS object literal classes" => 4,
            "JS Self-Exec. Func."       => 3,
            "LESS"                      => 3,
        ),

        //development utilities
        "utilites" => array(
            "SVN"     => 4,
            "Git"     => 3,
            "Vagrant" => 3,
        ),

        //software, programs, et. al.
        "software" => array(
            "Vim"         => 4,
            "Github"      => 4,
            "Bitbucket"   => 4,
            "Jira"        => 3,
            "Agile Scrum" => 3,
        ),
    );

    /**
     * Return the skillSet property.
     *
     * @author John Gieselmann <john.gieselmann@gmail.com>
     *
     * @return arr $_skillSet.
     */
    public function getSkillSet()
    {
        return $this->_skillSet;
    }
}

$cred = new DevCred();
echo "-----------------------\n";
echo "Development Credentials\n";
echo "-----------------------\n";
print_r($cred->getSkillSet());


class Person
{
    private $_name = "John Gieselmann";

    private $_email = "john.gieselmann@gmail.com";

    private $_city = "Boulder";

    public function getContactInfo()
    {
        return array(
            "name"  => $this->_name,
            "email" => $this->_email,
            "city"  => $this->_city,
        );
    }
}

/**
 * This class is used to give insight into the company I work for and the
 * projects I work on there.
 * 
 * @author John Gieselmann <john.gieselmann@gmail.com>
 */
class WorkExperience
{
    /**
     * @var arr $_employer All about my current employer, People Productions
     * and my role within the company.
     */
    private $_employer = array(
        "company"  => "People Productions",
        "position" => "Lead Developer",
        "role"     => "As the lead developer I am a part of the development team’s projects from discovery to delivery. During discovery, I work directly with our COO, Project Manager, and Designer to scope the development required for a project. Throughout the development phase, the dev team and I work cohesively on our assigned tasks while I provide them with assistance as needed. Once a project is complete I push the project to the client and am responsible for ensuring it is maintained properly, whether by me or another developer.",
    );

    /**
     * @var arr $_projects The primary work I perform at People Productions.
     */
    private $_projects = array(

        "UpSync" => array(
            0 => "UpSync is a sales application and content control system built to run on iOS and desktop browsers. At its core, UpSync presents and manages content and the data surrounding it through role-based user authentication.",
            1 => "I both build new features and maintain legacy code and functionality that is both client-side and server-side. Some of the main features of UpSync include: a presentation tool for images, videos, and other assets; an HTML form builder that can be shared and stores data; as well as data tracking and reporting for usage statistics.",
        ),

        "Data Web Apps" => "One of the many services provided by People Productions includes the creation of data-driven web applications for global, enterprise companies. These applications are built on a foundation of JavaScript and utilize Web SQL for storing data locally on the device until synchronized with a server. These applications are being used for things like cost justification, product listing, building quotes for clients, and the like.",

        "HTML5 Apps"  => "In addition to data-driven applications, we design and build interactive brochures that are capable of running offline on both desktop and mobile browsers. The brochures are primarily used as interactive sales tools utilizing CSS styles and animations, images, and videos to create an engaging user experience.",
    );

}
