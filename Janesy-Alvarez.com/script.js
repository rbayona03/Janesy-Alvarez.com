const navigation = document.querySelector('.navbar_mobile');
const tab = document.querySelector('.menuTab');
const aboutMe = document.querySelector('.abtInfo');
const education = document.querySelector('.education');

const Slider = () => {
    tab.addEventListener('click', (e)=>{
        e.preventDefault;
        navigation.classList.toggle('Show');

    })
}


const janesy = {
    name: "Janesy Alvarez",
    job: "Paralegal",
    edu: "FIU ParaLegal Certificate",
    skills: {
        skill1:" Microsoft Office",
        skill2: "skill 2",
        skill3:  "skill 3", 
        skill4: "skill 4"
    }
}

function aboutDOM() {

    aboutMe.insertAdjacentHTML('beforeend',  `
                    <h2>About Me</h2>
					<p> Diligent and resourceful certified ${janesy.job} with 
                    experience in conducting legal research and case investigations; trust worthy
                    in handling confidential information and articulate in
                    preparing persuasive legal arguments, motions and agreements.
					</p>			
    `);
}

function edu(){
    education.insertAdjacentHTML(`afterbegin`, `
    
    <div class="eduCard_cont">
        <div class="eduCard">
        <h2>Education</h2>
            <img class="cardHero" src="./images/certificate.png" />
            <h4>${janesy.edu}</h4>
            <h5>August 2020 - August 2021</h5>
        </div>

        <div class="eduCard">
        <h2>Skills</h2>
        <img  class="cardHero" src="./images/skillHero.png">
        <ul>
        <li>${janesy.skills.skill1}</li>
        <li>${janesy.skills.skill2}</li>
        <li>${janesy.skills.skill3}</li>
        <li>${janesy.skills.skill4}</li>
        </ul>
        </div>
    </div>

    `)
};
edu();
Slider();
aboutDOM();
