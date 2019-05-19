<?php
require_once('../../customservicelogin.php');

$admin_cookie = "adminData";
function getCookieString($admin_cookie)
{
    return isset($_COOKIE[$admin_cookie]) ? $_COOKIE[$admin_cookie] : null;
}

$customServicesLogin = new customServicesLogin();
$loginResponse = json_decode($customServicesLogin->authenticateAndReturnCmtCookie());

if ($loginResponse->{'status'} != 'success' && $_SERVER['SERVER_NAME'] != 'service-stage.inbake.com') {
    if ($_SERVER['SERVER_NAME'] != 'studio.innovid.com') {
        header("Location: http://studio.innovid.com/creative_services/dealer_locator/uploader/index.php");
    }
    exit();
} else {
    $userData = json_decode(getCookieString($admin_cookie));
    setcookie('tempUserData', json_encode(array('firstName' => $userData->firstName, 'lastName' => $userData->lastName, 'email' => $loginResponse->msg)), 0);
}
?>