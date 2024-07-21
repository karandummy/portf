'use strict';

let output = document.querySelector(".output-data");
const def_text = document.querySelector(".in").innerHTML;
let input_cmd = document.querySelector('.type_pannu');
let help_helper = document.querySelector('.help-helper');
printHelpCmd();
function init(){
    document.querySelector('body').addEventListener('keydown', function(e){
        var val = input_cmd.value;
        if (e.key === 'Enter' && val != ""){
            main(val.trim());
        }
    });
}

function main(val){
    clearInputBox();
    modhalVelai(val);
    switch(val){
        case 'help':
            printHelpCmd();
            break;
        case 'resume':
            printResumeCmd();
            break;
        case 'whoami':
            printAboutCmd();
            break;
        case 'projects':
            printProjectsCmd();
            break;
        case 'achievements':
            printAchievementsCmd();
            break;
        case 'techstack':
            printTechStackCmd();
            break;
        
        case 'certifications':
            printCertificationsCmd();
            break;
        /*case 'socials':
            printAllSocialsCmd();
            break;
        */
        case 'linkedin':
            openLinkedin();
            break;
        case 'github':
            openGit();
            break;
        case 'leetcode':
            openLeetcode();
            break;
        case 'skillrack':
            openSkillrack();
            break;
        case 'clear':
            clearOutput();
            break;
        default:
            illaSaab();
            break;
    }
    input_cmd.focus();
    input_cmd.scrollIntoView({behavior: 'smooth'});
}

function clearInputBox(){
    input_cmd.value = "";
}

function clearOutput(){
    output.innerHTML = "";
}

function modhalVelai(cmd){
    const html = `<p class="us-clr">${def_text}</p><p class = "text" style = "display:inline-block">${cmd}</p><br />`;
    output.insertAdjacentHTML('beforeend',html);
}

function illaSaab(){
    const html = `<br /><p class = "text">Command does not exist! ${help_helper.innerHTML}</p> <br />`;
    output.insertAdjacentHTML('beforeend',html);
}

function printHelpCmd(){
    let data = "";
    data += '<br />';
    data += "<p class = 'text' style='font-size: 20px;'><span class = 'highlight-cmd'>whoami</span> - A quick introduction about me.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>resume</span> - To take a look at my resume.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>projects</span> - To know & view my recent projects.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>achievements</span> - To know my accomplishments till now.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>techstack</span> - To take a look at my skillset.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>certifications</span> - To view my certifications.<br /></p>";
    /*data += "<span class = 'highlight-cmd'>socials</span> - To take a look at all my socials.<br />";*/
    data += "<p class = 'text'><span class = 'highlight-cmd'>linkedin</span> - To view my linkedin profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>github</span> - To view my Github profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>leetcode</span> - To check out my leetcode profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>skillrack</span> - To check out my skillrack profile.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>help</span> - To view all the available commands.<br /></p>";
    data += "<p class = 'text'><span class = 'highlight-cmd'>clear</span> - To clear the terminal window.<br /></p>";
    data += `<br />`;

    output.insertAdjacentHTML('beforeend',data);
}

function openLinkedin(){
    output.insertAdjacentHTML('beforeend', `<br /><p class = "text">Opening LinkedIn...</p><br />`);
    setTimeout(() => {
        window.open('https://www.linkedin.com/in/karan-s-baab65250/','_blank');
    }, 3000);
}

function openGit(){
    output.insertAdjacentHTML('beforeend' ,`<br /><p class = "text" >Opening GitHub...</p><br />`);
    setTimeout(() => {
        window.open('https://github.com/karandummy','_blank');
    }, 3000);
}

function openLeetcode(){
    output.insertAdjacentHTML('beforeend',`<br /><p class = "text">Opening Leetcode...</p><br />`);
    setTimeout(() => {
        window.open('https://leetcode.com/u/karandummy/','_blank');
    }, 3000);
}

function openSkillrack(){
    output.insertAdjacentHTML('beforeend',`<br /><p class = "text">Opening Skillrack...</p><br />`);
    setTimeout(() => {
        window.open('https://www.skillrack.com/faces/resume.xhtml?id=404502&key=685e51eb3769e81c34ca49ce1be7d45ad807254f','_blank');
    }, 3000);
}

function printAboutCmd(){
    const html = `<br /><div class = "container">
    <div class = "container-right">
      <img class = "my-pic" src="karan.jpeg" alt="my-image" />
    </div>
    <div class = "container-left">
      <p class = "text"> Hello people! I am karan from kayathar,Tuticorin. I currently pursueing my prefinalyear of Computer Science and Engineering at National engineering college, kovilpatti with an excellent CGPA of 8.92 upto my 3rd semester.BlockChain & CyberSecurity is my domain of interest.</p>
    </div>
  </div><br />`;
    output.insertAdjacentHTML('beforeend',html);
}

//update your resume
function printResumeCmd(){
    const html = `<br /><a href = "karan-cv.pdf" download = "karan-cv.pdf" target = "_blank">karan-cv.pdf</a><br /><br />`;
    output.insertAdjacentHTML('beforeend',html);
}
//update project details here
function printProjectsCmd(){
    const html = `<p class = "text"><ul type = "square">
    <li>Homely Hub : It is a web 
platform that lets people find and
book unique places to stay while
travelling Using "MERN Stack"</li>
    </ul></p>`;
    output.insertAdjacentHTML('beforeend',html);
}

//update achievements heere
function printAchievementsCmd(){
    const html = `<ul> 
    <li>2100+ programs solved on Skillrack including mastery of 
    240+ daily challenges and completion of 150+ daily tests.</li>
    <li>Won the Third prize, including a cash prize of Rs.250, in a Coding contest conducted by  Shri Eshwar College Of Engineering - Coimbatore.</li>
    <li>Won second prize in an Technical Quiz contest conducted by 
    IEEE Student Branch.</li>
    <li>WOn First prize in an Technical Quiz contest conducted by 
    CSE Association,NEC.</li>
    </ul>`;
    output.insertAdjacentHTML('beforeend',html);
}

function printTechStackCmd(){
    const html = `<ul type = "square">
    <li>C</li>
    <li>C++</li>
    <li>Python</li>
    <li>SQL</li>
    <li>HTML,CSS,JavaScript</li>
    </ul>`;
    output.insertAdjacentHTML('beforeend',html);
}

function printCertificationsCmd(){
    const html = `<ul> 
    <li>Cloud Computing,Introduction to IOT from NPTEL</li>
    <li>Database Management System from Scaler</li>
    </ul>`;
    output.insertAdjacentHTML('beforeend',html);
}
//yet to implement certifications,all socials
// main code starts here
init();