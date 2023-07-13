let name ='';
let email = '';
let phone = '';
function step2(){
    name=document.getElementById('name').value;
    let errorNameValid=document.getElementById('error-name-valid');
    let errorName=document.getElementById('error-name');
    let nameregex=/^([A-Z]{1})([a-z]+)(\-([A-Z]{1})([a-z]+))?(\s)([A-Z]{1})([a-z]+)$/;
    if(nameregex.test(name)){
        errorNameValid.style.display= 'none';
        errorName.style.display='none';
    }
    else {
        errorNameValid.style.display= 'block';
        errorName.style.display='none';
    }
    if(name===''){
        errorNameValid.style.display= 'none';
        errorName.style.display='block';
    }
    email=document.getElementById('email').value;
    let errorEmailValid=document.getElementById('error-email-valid');
    let errorEmail=document.getElementById('error-email');
    let emailregex=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9])+.([a-z]{2,})([a-z]{2,3})?$/;
    if(emailregex.test(email)){
        errorEmailValid.style.display= 'none';
        errorEmail.style.display='none';
    }
    else {
        errorEmailValid.style.display= 'block';
        errorEmail.style.display='none';
    }
    if(email===''){
        errorEmailValid.style.display= 'none';
        errorEmail.style.display='block';
    }
    phone=document.getElementById('phone').value;
    let errorPhoneValid=document.getElementById('error-phone-valid');
    let errorPhone=document.getElementById('error-phone');
    let phoneregex=/^([0-9]{1,3})(\s)([0-9]{2})(\s)?([0-9]{3})(\s)?([0-9]{3})$/;
    if(phoneregex.test(phone)){
        errorPhoneValid.style.display= 'none';
        errorPhone.style.display='none';
    }
    else {
        errorPhoneValid.style.display= 'block';
        errorPhone.style.display='none';
    }
    if(phone===''){
        errorPhoneValid.style.display= 'none';
        errorPhone.style.display='block';
    }
    if(nameregex.test(name) && emailregex.test(email) && phoneregex.test(phone)){
        let step1 = document.getElementById('interaction-step1');
        let step2 = document.getElementById('interaction-step2');
        step1.style.display = 'none'
        step2.style.display = 'flex'
        let number1 = document.getElementById('step-number-1');
        let number1PC = document.getElementById('step-number-1-pc');
        let number2 = document.getElementById('step-number-2');
        let number2PC = document.getElementById('step-number-2-pc');
        number1.style.backgroundColor ='transparent';
        number1PC.style.backgroundColor ='transparent';
        number1.style.color = 'white';
        number1PC.style.color = 'white';
        number1.style.borderColor = 'white';
        number1PC.style.borderColor = 'white';
        number2.style.backgroundColor = 'hsl(206, 94%, 87%)';
        number2PC.style.backgroundColor = 'hsl(206, 94%, 87%)';
        number2.style.color = 'black';
        number2PC.style.color= 'black';
        number2.style.borderColor= 'hsl(206, 94%, 87%)';
        number2PC.style.borderColor = 'hsl(206, 94%, 87%)';
    }
    return true
}
function step1B() {
    let step1 = document.getElementById('interaction-step1');
    let step2 = document.getElementById('interaction-step2');
    step2.style.display = 'none'
    step1.style.display = 'flex'
    let number1 = document.getElementById('step-number-1');
    let number1PC = document.getElementById('step-number-1-pc');
    let number2 = document.getElementById('step-number-2');
    let number2PC = document.getElementById('step-number-2-pc');
    number2.style.backgroundColor ='transparent';
    number2PC.style.backgroundColor ='transparent';
    number2.style.color = 'white';
    number2PC.style.color = 'white';
    number2.style.borderColor = 'white';
    number2PC.style.borderColor = 'white';
    number1.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number1PC.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number1.style.color = 'black';
    number1PC.style.color= 'black';
    number1.style.borderColor= 'hsl(206, 94%, 87%)';
    number1PC.style.borderColor = 'hsl(206, 94%, 87%)';
}
function step2B(){
    let step3 = document.getElementById('interaction-step3');
    let step2 = document.getElementById('interaction-step2');
    step3.style.display = 'none'
    step2.style.display = 'flex'
    let number3 = document.getElementById('step-number-3');
    let number3PC = document.getElementById('step-number-3-pc');
    let number2 = document.getElementById('step-number-2');
    let number2PC = document.getElementById('step-number-2-pc');
    number3.style.backgroundColor ='transparent';
    number3PC.style.backgroundColor ='transparent';
    number3.style.color = 'white';
    number3PC.style.color = 'white';
    number3.style.borderColor = 'white';
    number3PC.style.borderColor = 'white';
    number2.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number2PC.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number2.style.color = 'black';
    number2PC.style.color= 'black';
    number2.style.borderColor= 'hsl(206, 94%, 87%)';
    number2PC.style.borderColor = 'hsl(206, 94%, 87%)';
}
function step3(){
    let step3 = document.getElementById('interaction-step3');
    let step2 = document.getElementById('interaction-step2');
    step2.style.display = 'none'
    step3.style.display = 'flex'
    let number3 = document.getElementById('step-number-3');
    let number3PC = document.getElementById('step-number-3-pc');
    let number2 = document.getElementById('step-number-2');
    let number2PC = document.getElementById('step-number-2-pc');
    number2.style.backgroundColor ='transparent';
    number2PC.style.backgroundColor ='transparent';
    number2.style.color = 'white';
    number2PC.style.color = 'white';
    number2.style.borderColor = 'white';
    number2PC.style.borderColor = 'white';
    number3.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number3PC.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number3.style.color = 'black';
    number3PC.style.color= 'black';
    number3.style.borderColor= 'hsl(206, 94%, 87%)';
    number3PC.style.borderColor = 'hsl(206, 94%, 87%)';
    if(planSelected==='ArcadeY' || planSelected==='AdvancedY' || planSelected==='ProY'){
        let addOnOS = document.getElementById('add-ons-button-os');
        let addOnOSChecked = document.getElementById('add-ons-button-os-checked');
        let addOnLS = document.getElementById('add-ons-button-ls');
        let addOnLSChecked = document.getElementById('add-ons-button-ls-checked');
        let addOnCP = document.getElementById('add-ons-button-cp');
        let addOnCPChecked = document.getElementById('add-ons-button-cp-checked');
        let addOnOSY = document.getElementById('add-ons-button-os-y');
        let addOnOSYChecked = document.getElementById('add-ons-button-os-y-checked');
        let addOnLSY = document.getElementById('add-ons-button-ls-y');
        let addOnLSYChecked = document.getElementById('add-ons-button-ls-y-checked');
        let addOnCPY = document.getElementById('add-ons-button-cp-y');
        let addOnCPYChecked = document.getElementById('add-ons-button-cp-y-checked');
        addOnOS.style.display = 'none';
        addOnLS.style.display = 'none';
        addOnCP.style.display = 'none';
        addOnOSChecked.style.display = 'none';
        addOnLSChecked.style.display = 'none';
        addOnCPChecked.style.display ='none';
        addOnOSY.style.display = 'block';
        addOnLSY.style.display = 'block';
        addOnCPY.style.display = 'block';
        addOnOSYChecked.style.display = 'none';
        addOnLSYChecked.style.display = 'none';
        addOnCPYChecked.style.display ='none';
        if(os ==='checked' || os ==='checkedY'){
            os ='checkedY';
            addOnOSY.style.display= 'none';
            addOnOSYChecked.style.display= 'block';
        }
        if(ls ==='checked' || ls ==='checkedY'){
            ls ='checkedY';
            addOnLSY.style.display= 'none';
            addOnLSYChecked.style.display= 'block';
        }
        if(cp ==='checked' || cp ==='checkedY'){
            cp ='checkedY';
            addOnCPY.style.display= 'none';
            addOnCPYChecked.style.display= 'block';
        }
    }
    if(planSelected==='Arcade' || planSelected==='Advanced' || planSelected==='Pro'){
        let addOnOS = document.getElementById('add-ons-button-os');
        let addOnOSChecked = document.getElementById('add-ons-button-os-checked');
        let addOnLS = document.getElementById('add-ons-button-ls');
        let addOnLSChecked = document.getElementById('add-ons-button-ls-checked');
        let addOnCP = document.getElementById('add-ons-button-cp');
        let addOnCPChecked = document.getElementById('add-ons-button-cp-checked');
        let addOnOSY = document.getElementById('add-ons-button-os-y');
        let addOnOSYChecked = document.getElementById('add-ons-button-os-y-checked');
        let addOnLSY = document.getElementById('add-ons-button-ls-y');
        let addOnLSYChecked = document.getElementById('add-ons-button-ls-y-checked');
        let addOnCPY = document.getElementById('add-ons-button-cp-y');
        let addOnCPYChecked = document.getElementById('add-ons-button-cp-y-checked');
        addOnOS.style.display = 'block';
        addOnLS.style.display = 'block';
        addOnCP.style.display = 'block';
        addOnOSChecked.style.display = 'none';
        addOnLSChecked.style.display = 'none';
        addOnCPChecked.style.display ='none';
        addOnOSY.style.display = 'none';
        addOnLSY.style.display = 'none';
        addOnCPY.style.display = 'none';
        addOnOSYChecked.style.display = 'none';
        addOnLSYChecked.style.display = 'none';
        addOnCPYChecked.style.display ='none';
        if(os === 'checked' || os ==='checkedY'){
            os = 'checked';
            addOnOS.style.display= 'none';
            addOnOSChecked.style.display= 'block';
        }
        if(ls === 'checked' || ls ==='checkedY'){
            ls = 'checked';
            addOnLS.style.display= 'none';
            addOnLSChecked.style.display= 'block';
        }
        if(cp === 'checked' || cp ==='checkedY'){
            cp = 'checked';
            addOnCP.style.display= 'none';
            addOnCPChecked.style.display= 'block';
        }
    }
}
function step3B(){
    let step3 = document.getElementById('interaction-step3');
    let step4 = document.getElementById('interaction-step4');
    step4.style.display = 'none'
    step3.style.display = 'flex'
    let number3 = document.getElementById('step-number-3');
    let number3PC = document.getElementById('step-number-3-pc');
    let number4 = document.getElementById('step-number-4');
    let number4PC = document.getElementById('step-number-4-pc');
    number4.style.backgroundColor ='transparent';
    number4PC.style.backgroundColor ='transparent';
    number4.style.color = 'white';
    number4PC.style.color = 'white';
    number4.style.borderColor = 'white';
    number4PC.style.borderColor = 'white';
    number3.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number3PC.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number3.style.color = 'black';
    number3PC.style.color= 'black';
    number3.style.borderColor= 'hsl(206, 94%, 87%)';
    number3PC.style.borderColor = 'hsl(206, 94%, 87%)';
}
function step4(){
    let step4 = document.getElementById('interaction-step4');
    let step3 = document.getElementById('interaction-step3');
    step3.style.display = 'none';
    step4.style.display = 'flex';
    let number4 = document.getElementById('step-number-4');
    let number4PC = document.getElementById('step-number-4-pc');
    let number3 = document.getElementById('step-number-3');
    let number3PC = document.getElementById('step-number-3-pc');
    number3.style.backgroundColor ='transparent';
    number3PC.style.backgroundColor ='transparent';
    number3.style.color = 'white';
    number3PC.style.color = 'white';
    number3.style.borderColor = 'white';
    number3PC.style.borderColor = 'white';
    number4.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number4PC.style.backgroundColor = 'hsl(206, 94%, 87%)';
    number4.style.color = 'black';
    number4PC.style.color= 'black';
    number4.style.borderColor= 'hsl(206, 94%, 87%)';
    number4PC.style.borderColor = 'hsl(206, 94%, 87%)';
    let plan = document.getElementById('the-plan');
    let planPrice =document.getElementById('plan-price');
    let onlineServies = document.getElementById('online-servies');
    let largerStorage = document.getElementById('larger-storage');
    let customizableProfile = document.getElementById('customizable-profile');
    let planCost = 0;
    let cost =0;
    let osCost = document.getElementById('os-cost');
    let lsCost = document.getElementById('ls-cost');
    let cpCost = document.getElementById('cp-cost');
    switch(planSelected){
        case 'Arcade': plan.textContent= 'Arcade (monthly)'; planCost=9; planPrice.textContent= '$9/mo'; break;
        case 'Advanced': plan.textContent= 'Advanced (monthly)'; planCost=12; planPrice.textContent= '$12/mo'; break;
        case 'Pro': plan.textContent= 'Pro (monthly)'; planCost=15; planPrice.textContent= '$15/mo'; break;
        case 'ArcadeY': plan.textContent= 'Arcade (yearly)'; planCost=90; planPrice.textContent= '$90/y'; break;
        case 'AdvancedY': plan.textContent= 'Advanced (yearly)'; planCost=120; planPrice.textContent= '$120/y'; break;
        case 'ProY': plan.textContent= 'Pro (yearly)'; planCost=150; planPrice.textContent= '$150/y'; break;
    }
    switch(os){
        case '': onlineServies.style.display = 'none'; break;
        case 'checked': onlineServies.style.display = 'flex'; osCost.textContent = '$1/mo'; cost+=1; break;
        case 'checkedY': onlineServies.style.display = 'flex'; osCost.textContent = '$10/y'; cost+=10; break;
    }
    switch(ls){
        case '': largerStorage.style.display = 'none'; break;
        case 'checked': largerStorage.style.display = 'flex'; lsCost.textContent = '$2/mo'; cost+=2; break;
        case 'checkedY': largerStorage.style.display = 'flex'; lsCost.textContent = '$20/y'; cost+=20; break;
    }
    switch(cp){
        case '': customizableProfile.style.display = 'none'; ; break;
        case 'checked': customizableProfile.style.display = 'flex'; cpCost.textContent = '$2/mo' ; cost+=2; break;
        case 'checkedY': customizableProfile.style.display = 'flex'; cpCost.textContent = '$20/y'; cost+=20; break;
    }
    cost+=planCost;
    let total= document.getElementById('total') ;
    let totalCost = document.getElementById('total-cost');
    if(planSelected==='ArcadeY' || planSelected==='AdvancedY' || planSelected==='ProY'){
        total.textContent = 'Total (per year)';
        totalCost.textContent = '$'+cost+'/yr'
    }
    else{
        total.textContent = 'Total (per month)';
        totalCost.textContent = '$'+cost+'/mo'
    }
}
function thankYou(){
    let step4 = document.getElementById('interaction-step4');
    let thankYou = document.getElementById('thank-you');
    step4.style.display = 'none';
    thankYou.style.display = 'flex';
}
window.addEventListener('resize', resizeHandler);
function resizeHandler() {
    let infobox=document.getElementById('info-step2');
    let width=window.innerWidth;
    let monthlyArcade= document.getElementById('plans-button-arcade');
    if(width>375){
        if(monthlyArcade.style.display=='none'){
            infobox.style.marginTop= '18px';
        }
        else{
            infobox.style.marginTop= '18px';
        }
    }
    else{
        if(monthlyArcade.style.display=='none'){
            infobox.style.marginTop= '-560px';
        }
        else{
            infobox.style.marginTop= '-600px';
        }
    }
}
let planSelected = 'Arcade';
function check(){
    let infobox=document.getElementById('info-step2');
    let width=window.innerWidth;
    let monthly = document.getElementById('monthly');
    let yearly = document.getElementById('yearly');
    let monthlyArcade= document.getElementById('plans-button-arcade');
    let monthlyAdvanced= document.getElementById('plans-button-advanced');
    let monthlyPro= document.getElementById('plans-button-pro');
    let yearlyArcade = document.getElementById('plans-button-arcade-y');
    let yearlyAdvanced= document.getElementById('plans-button-advanced-y');
    let yearlyPro= document.getElementById('plans-button-pro-y');
    let mYSwitch = document.getElementById('switch').checked;
    if(mYSwitch){
        monthly.style.color = 'hsl(231, 11%, 63%)';
        yearly.style.color = 'hsl(213, 96%, 18%)';
        if(width>375){
            infobox.style.marginTop= '18px';
        }
        else{
            infobox.style.marginTop= '-560px';
        }
        if(planSelected === 'Arcade'){
            planSelected = 'ArcadeY'
            yearlyArcade.style.borderColor = 'hsl(213, 96%, 18%)';
            yearlyArcade.style.backgroundColor = 'hsl(217, 100%, 97%)';
            yearlyAdvanced.style.borderColor = 'hsl(229, 24%, 87%)';
            yearlyAdvanced.style.backgroundColor = 'white';
            yearlyPro.style.borderColor = 'hsl(229, 24%, 87%)';
            yearlyPro.style.backgroundColor = 'white';
        }
        if(planSelected==='Advanced'){
            
            yearlyAdvanced.style.borderColor = 'hsl(213, 96%, 18%)';
            yearlyAdvanced.style.backgroundColor = 'hsl(217, 100%, 97%)';
            yearlyArcade.style.borderColor = 'hsl(229, 24%, 87%)';
            yearlyArcade.style.backgroundColor = 'white';
            yearlyPro.style.borderColor = 'hsl(229, 24%, 87%)';
            yearlyPro.style.backgroundColor = 'white';
            planSelected= 'AdvancedY';
        }
        if(planSelected==='Pro'){
            yearlyPro.style.borderColor = 'hsl(213, 96%, 18%)';
            yearlyPro.style.backgroundColor = 'hsl(217, 100%, 97%)';
            yearlyArcade.style.borderColor = 'hsl(229, 24%, 87%)';
            yearlyArcade.style.backgroundColor = 'white';
            yearlyAdvanced.style.borderColor = 'hsl(229, 24%, 87%)';
            yearlyAdvanced.style.backgroundColor = 'white';
            planSelected= 'ProY';
        }
        monthlyArcade.style.display= 'none';
        monthlyAdvanced.style.display= 'none';
        monthlyPro.style.display= 'none';
        yearlyArcade.style.display='block';
        yearlyAdvanced.style.display='block';
        yearlyPro.style.display='block';
    }
    else{
        yearly.style.color = 'hsl(231, 11%, 63%)';
        monthly.style.color = 'hsl(213, 96%, 18%)';
        if(width>375){
            infobox.style.marginTop= '18px';
        }
        else{
            infobox.style.marginTop= '-600px';
        }
        if(planSelected === 'ArcadeY'){
            planSelected = 'Arcade'
            monthlyArcade.style.borderColor = 'hsl(213, 96%, 18%)';
            monthlyArcade.style.backgroundColor = 'hsl(217, 100%, 97%)';
            monthlyAdvanced.style.borderColor = 'hsl(229, 24%, 87%)';
            monthlyAdvanced.style.backgroundColor = 'white';
            monthlyPro.style.borderColor = 'hsl(229, 24%, 87%)';
            monthlyPro.style.backgroundColor = 'white';
        }
        if(planSelected==='AdvancedY'){
            monthlyAdvanced.style.borderColor = 'hsl(213, 96%, 18%)';
            monthlyAdvanced.style.backgroundColor = 'hsl(217, 100%, 97%)';
            monthlyArcade.style.borderColor = 'hsl(229, 24%, 87%)';
            monthlyArcade.style.backgroundColor = 'white';
            monthlyPro.style.borderColor = 'hsl(229, 24%, 87%)';
            monthlyPro.style.backgroundColor = 'white';
            planSelected= 'Advanced';
        }
        if(planSelected==='ProY'){
            monthlyPro.style.borderColor = 'hsl(213, 96%, 18%)';
            monthlyPro.style.backgroundColor = 'hsl(217, 100%, 97%)';
            monthlyArcade.style.borderColor = 'hsl(229, 24%, 87%)';
            monthlyArcade.style.backgroundColor = 'white';
            monthlyAdvanced.style.borderColor = 'hsl(229, 24%, 87%)';
            monthlyAdvanced.style.backgroundColor = 'white';
            planSelected= 'Pro';
        }
        monthlyArcade.style.display= 'block';
        monthlyAdvanced.style.display= 'block';
        monthlyPro.style.display= 'block';
        yearlyArcade.style.display='none';
        yearlyAdvanced.style.display='none';
        yearlyPro.style.display='none';
    }
}
function arcade(){
    let monthlyArcade= document.getElementById('plans-button-arcade');
    let monthlyAdvanced= document.getElementById('plans-button-advanced');
    let monthlyPro= document.getElementById('plans-button-pro');
    monthlyArcade.style.borderColor = 'hsl(213, 96%, 18%)';
    monthlyArcade.style.backgroundColor = 'hsl(217, 100%, 97%)';
    monthlyAdvanced.style.borderColor = 'hsl(229, 24%, 87%)';
    monthlyAdvanced.style.backgroundColor = 'white';
    monthlyPro.style.borderColor = 'hsl(229, 24%, 87%)';
    monthlyPro.style.backgroundColor = 'white';
    planSelected= 'Arcade';
}
function arcadeY(){
    let yearlyArcade= document.getElementById('plans-button-arcade-y');
    let yearlyAdvanced= document.getElementById('plans-button-advanced-y');
    let yearlyPro= document.getElementById('plans-button-pro-y');
    yearlyArcade.style.borderColor = 'hsl(213, 96%, 18%)';
    yearlyArcade.style.backgroundColor = 'hsl(217, 100%, 97%)';
    yearlyAdvanced.style.borderColor = 'hsl(229, 24%, 87%)';
    yearlyAdvanced.style.backgroundColor = 'white';
    yearlyPro.style.borderColor = 'hsl(229, 24%, 87%)';
    yearlyPro.style.backgroundColor = 'white';
    planSelected= 'ArcadeY';
}
function advanced(){
    let monthlyArcade= document.getElementById('plans-button-arcade');
    let monthlyAdvanced= document.getElementById('plans-button-advanced');
    let monthlyPro= document.getElementById('plans-button-pro');
    monthlyAdvanced.style.borderColor = 'hsl(213, 96%, 18%)';
    monthlyAdvanced.style.backgroundColor = 'hsl(217, 100%, 97%)';
    monthlyArcade.style.borderColor = 'hsl(229, 24%, 87%)';
    monthlyArcade.style.backgroundColor = 'white';
    monthlyPro.style.borderColor = 'hsl(229, 24%, 87%)';
    monthlyPro.style.backgroundColor = 'white';
    planSelected= 'Advanced';
}function advancedY(){
    let yearlyArcade= document.getElementById('plans-button-arcade-y');
    let yearlyAdvanced= document.getElementById('plans-button-advanced-y');
    let yearlyPro= document.getElementById('plans-button-pro-y');
    yearlyAdvanced.style.borderColor = 'hsl(213, 96%, 18%)';
    yearlyAdvanced.style.backgroundColor = 'hsl(217, 100%, 97%)';
    yearlyArcade.style.borderColor = 'hsl(229, 24%, 87%)';
    yearlyArcade.style.backgroundColor = 'white';
    yearlyPro.style.borderColor = 'hsl(229, 24%, 87%)';
    yearlyPro.style.backgroundColor = 'white';
    planSelected= 'AdvancedY';
}
function pro(){
    let monthlyArcade= document.getElementById('plans-button-arcade');
    let monthlyAdvanced= document.getElementById('plans-button-advanced');
    let monthlyPro= document.getElementById('plans-button-pro');
    monthlyPro.style.borderColor = 'hsl(213, 96%, 18%)';
    monthlyPro.style.backgroundColor = 'hsl(217, 100%, 97%)';
    monthlyAdvanced.style.borderColor = 'hsl(229, 24%, 87%)';
    monthlyAdvanced.style.backgroundColor = 'white';
    monthlyArcade.style.borderColor = 'hsl(229, 24%, 87%)';
    monthlyArcade.style.backgroundColor = 'white';
    planSelected= 'Pro';
}
function proY(){
    let yearlyArcade= document.getElementById('plans-button-arcade-y');
    let yearlyAdvanced= document.getElementById('plans-button-advanced-y');
    let yearlyPro= document.getElementById('plans-button-pro-y');
    yearlyPro.style.borderColor = 'hsl(213, 96%, 18%)';
    yearlyPro.style.backgroundColor = 'hsl(217, 100%, 97%)';
    yearlyArcade.style.borderColor = 'hsl(229, 24%, 87%)';
    yearlyArcade.style.backgroundColor = 'white';
    yearlyAdvanced.style.borderColor = 'hsl(229, 24%, 87%)';
    yearlyAdvanced.style.backgroundColor = 'white';
    planSelected= 'ProY';
}
let os = '';
let ls = '';
let cp = '';
function osCheck(){
    let monthlyOS = document.getElementById('add-ons-button-os');
    let monthlyOSChecked = document.getElementById('add-ons-button-os-checked');
    monthlyOS.style.display = 'none';
    monthlyOSChecked.style.display = 'block';
    os = 'checked';
}
function osUncheck(){
    let monthlyOS = document.getElementById('add-ons-button-os');
    let monthlyOSChecked = document.getElementById('add-ons-button-os-checked');
    monthlyOS.style.display = 'block';
    monthlyOSChecked.style.display = 'none';
    os = '';
}
function lsCheck(){
    let monthlyLS = document.getElementById('add-ons-button-ls');
    let monthlyLSChecked = document.getElementById('add-ons-button-ls-checked');
    monthlyLS.style.display = 'none';
    monthlyLSChecked.style.display = 'block';
    ls = 'checked';
}
function lsUncheck(){
    let monthlyLS = document.getElementById('add-ons-button-ls');
    let monthlyLSChecked = document.getElementById('add-ons-button-ls-checked');
    monthlyLS.style.display = 'block';
    monthlyLSChecked.style.display = 'none';
    ls = '';
}
function cpCheck(){
    let monthlyCP = document.getElementById('add-ons-button-cp');
    let monthlyCPChecked = document.getElementById('add-ons-button-cp-checked');
    monthlyCP.style.display = 'none';
    monthlyCPChecked.style.display = 'block';
    cp = 'checked';
}
function cpUncheck(){
    let monthlyCP = document.getElementById('add-ons-button-cp');
    let monthlyCPChecked = document.getElementById('add-ons-button-cp-checked');
    monthlyCP.style.display = 'block';
    monthlyCPChecked.style.display = 'none';
    cp = '';
}
function osYCheck(){
    let yearlyOS = document.getElementById('add-ons-button-os-y');
    let yearlyOSChecked = document.getElementById('add-ons-button-os-y-checked');
    yearlyOS.style.display = 'none';
    yearlyOSChecked.style.display = 'block';
    os = 'checkedY';
}
function osYUncheck(){
    let yearlyOS = document.getElementById('add-ons-button-os-y');
    let yearlyOSChecked = document.getElementById('add-ons-button-os-y-checked');
    yearlyOS.style.display = 'block';
    yearlyOSChecked.style.display = 'none';
    os = '';
}
function lsYCheck(){
    let yearlyLS = document.getElementById('add-ons-button-ls-y');
    let yearlyLSChecked = document.getElementById('add-ons-button-ls-y-checked');
    yearlyLS.style.display = 'none';
    yearlyLSChecked.style.display = 'block';
    ls = 'checkedY';
}
function lsYUncheck(){
    let yearlyLS = document.getElementById('add-ons-button-ls-y');
    let yearlyLSChecked = document.getElementById('add-ons-button-ls-y-checked');
    yearlyLS.style.display = 'block';
    yearlyLSChecked.style.display = 'none';
    ls = '';
}
function cpYCheck(){
    let yearlyCP = document.getElementById('add-ons-button-cp-y');
    let yearlyCPChecked = document.getElementById('add-ons-button-cp-y-checked');
    yearlyCP.style.display = 'none';
    yearlyCPChecked.style.display = 'block';
    cp = 'checkedY';
}
function cpYUncheck(){
    let yearlyCP = document.getElementById('add-ons-button-cp-y');
    let yearlyCPChecked = document.getElementById('add-ons-button-cp-y-checked');
    yearlyCP.style.display = 'block';
    yearlyCPChecked.style.display = 'none';
    cp = '';
}