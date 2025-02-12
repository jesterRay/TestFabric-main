<?PHP
include ("../includes/config.php");
include ("../includes/functions.php");
include ("../includes/connection.php");
include ("../includes/db_structure.php");
include ("../includes/chk-admin-login.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- InstanceBegin template="/Templates/admin.dwt.php" codeOutsideHTMLIsLocked="false" -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<!-- InstanceBeginEditable name="doctitle" -->
<meta name="developers" content="Developed by Sulata iSoft, using SULATA FRAMEWORK 8.0| Form Pageset Builder. Framework Concept: Tahir Ata Barry. Developers: Farhan Shahid & Yasir Butt" />
<title>
<?=ADMIN_TITLE;?>
</title>
<script language="javascript" type="text/javascript">
window.onload=function(){
	if(window.suValidateForm){listen("suForm","submit","suValidateForm()");}
	if(window.focusFirstField){focusFirstField("suForm");}
}
</script>
<!-- InstanceEndEditable -->
<link rel="stylesheet" type="text/css" href="../css/style.css">
<link href="../includes/dhtml_calender/themes/aqua.css" rel="stylesheet" type="text/css" />
<script type='text/javascript' src='../includes/dhtml_calender/calendar.js'></script>
<script language="JavaScript" type="text/javascript" src="../includes/js.js"></script>
<script language="JavaScript" type="text/javascript" src="../includes/jquery.js"></script>
<!-- InstanceBeginEditable name="head" --><!-- InstanceEndEditable -->
</head>
<body>
<table width="950" border="0" align="center" cellpadding="0" cellspacing="0" class="main">
  <tr>
    <td class="topMenu"><img src="../images/backoffice.jpg" alt="BackOffice" width="104" height="39" /></td>
  </tr>
  <tr>
    <td class="graySep"><img src="../images/trans.gif" width="1" height="1" /></td>
  </tr>
  <tr>
    <td><table width="930" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td valign="top">&nbsp;</td>
        </tr>
        <tr>
          <td valign="top"><table width="930" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td width="200" valign="top"><?php include("admin-menu.php");?></td>
                <td width="730" valign="top"><!-- InstanceBeginEditable name="text" -->
                  <?PHP 	dbStructure_testfabrics_countries();
	 $sql=" SELECT countries__ID, countries__Name FROM testfabrics_map_countries WHERE  countries__ID = '".suDecrypt($_GET['id'])."' ";	
	$rsUpdate= suQuery($sql);
	$rowUpdate = suDbFetchData($rsUpdate);	
	suFree($rsUpdate);
?>
                  <?PHP /***  Please Note The Following   ****** 
  
	  	1) This variable $field_title is used for changing the alert box title in java script.
		2) There is a variable $class is used to change the default class of object.
		
	  ***        END                ***/ 	
?>
                  <form name="suForm" id="suForm" target="remote" action="countries-remote.php?do=mapUpdate"   method="post" onSubmit="return suValidateForm()" enctype="multipart/form-data">
                    <fieldset>
                    <legend>
                    <?PHP $file_array=suThisFile();echo $file_array[0];?>
                    </legend>
                    <div class="row">
                    <div>
                    <div>
                      <div class="inlineError" id="sysMessage"></div>
                    </div>
                    <div>
                    <div>
                      <label>
                      <?=$country__Name_req?>
                      Name:&nbsp;</label>
                      <div>
                        <input type="text" name="countries__Name" id="countries__Name" value="<?=$rowUpdate['countries__Name']?>" />
                        <?php /*?><?=createTextbox($country__Name_req,"countries__Name",$country__Name_max,suUnstrip($rowUpdate['countries__Name']),"textbox")?><?php */?>
                        <span class="inlineError" id="span_country__Name"></span> </div>
                    </div>
                    <br />
                    <div>
                      <?php if (file_exists("../map_images/".suCrypt($rowUpdate['countries__ID']).".jpg")){?>
                      <img 
                        width="32" 
                        border="0" 
                        src="../map_images/<?=suCrypt($rowUpdate['countries__ID'])?>.jpg?time=<?=time();?>" 
                        id="showImage_image" 
                        alt="Image">
                      <?php }else{ ?>
                      <img width="32" border="1" src="images/trans.gif" id="showImage_image" alt="Image">
                      <?php }?>
                    </div>
                    <br />
                    <div style="padding-bottom:5px">* Upload Flag: </div>
                    <div>
                      <input type="file" name="fileField" id="fileField" />
                      <br  />
                      <a href="http://testfabrics.com/flags/">http://testfabrics.com/flags/</a> </div>
                  </form>
                  <div class="right">
                    <input class="btnSubmit" type="submit" name="sbmt" value="Submit">
                    <?php if(isset($_GET["func"])){ ?>
                    <input type="hidden" name="func" id="func" value="<?php echo $_GET["func"];?>" />
                    <input type="hidden" name="obj" id="obj" value="<?php echo $_GET["obj"];?>" />
                    <?php } ?>
                  </div>
                  </div>
                  </div>
                  </fieldset>
                  <?PHP echo createHiddenfield("suAction",$_GET['id']).createHiddenfield("page_next",removeFromQueryString("id"));?>
                  <script language="javascript" type="text/javascript">
	function suValidateForm(){
		try{
			err=anyError=0;firstErrorFieldObj=$errorMsgs="";
	
		<?=checkJsField("countries__Name",$country__Name_jsreq,"alphanum");?>
		
			if(anyError==1){
				if(showAllErrors==true && showErrorInAlert==true){
					parent.suAlert($errorMsgs);
					setFocusOnObject(firstErrorFieldObj);
				}return false;
			}else if(err==0){return true;}
	
		}catch(e){	showError(e);return false;}
	}	
</script>
                  </form>
                  <iframe name="remote" width="<?=$iframe_width;?>" height="<?=$iframe_height;?>" frameborder="<?=$iframe_border;?>" id="remote" src="blank.php">Sorry, your browser does not support frames.</iframe>
                  <!-- InstanceEndEditable --></td>
              </tr>
            </table></td>
        </tr>
      </table></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>
<table width="700" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center" class="footer">&copy; <?php echo date("Y");?>. </td>
  </tr>
</table>
<?php if($prettyPhoto==true){?>
<script type="text/javascript" charset="utf-8">
		$(document).ready(function(){
			$(".gallery a[rel^='prettyPhoto']").prettyPhoto({theme:'facebook'});
		});
		</script>
<?php } ?>
</body>
<!-- InstanceEnd -->
</html>