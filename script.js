const Yes = document.querySelector('#Yes');
const text = document.querySelector("#text")
const Quets = document.querySelector(".Quets")
const NoEl = document.querySelector("#No")
const box = document.querySelector(".box")
const SadText = document.querySelector("#SadText")
const LoveQuets = document.querySelector("#LoveQuets")



//   Yes Button 

const loveEl = (e) => {
   
    if (e.target.innerText === 'Yes') {
        box.style.display = 'none'
        text.innerText = `I Love You Too `;
        SadText.innerText = '';
       
        // randome love Quets 
        setInterval(()=>{
            let number1 = 1
            let number2 = 2
            let number3 = 3
            let number4 = 4
            let number5 = 5
         let testww = parseInt(Math.random() * 4 + 1 )
         if (number1 === testww) {
            LoveQuets.innerHTML = `Do you believe in Love at first sight or should I walk by again?`
            SadText.innerText = '';
         }
         if (number2 === testww) {
            LoveQuets.innerHTML = `If being beautiful Was a crime, you'd be guilty as charged.`
            SadText.innerText = '';
         }
         if (number3 === testww) {
            LoveQuets.innerHTML = `Your eyes are like the ocean; I could swim in them all day.`
            SadText.innerText = '';
         }
         if (number4 === testww) {
            LoveQuets.innerHTML = ` I never believed in love at first sight, but that was before I saw you.`
            SadText.innerText = '';
         }
         if (number5 === testww) {
            LoveQuets.innerHTML = ` I would never play hide-and-seek with you because someone like you is impossible to find.`
            SadText.innerText = '';
         }
         console.log(testww);
        }, 3000)
         
       
        

             // confetti
        // go Buckeyes!
        let end = Date.now() + (15 * 1000);
        let colors = ['#bb0000', '#ffffff'];


        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var skew = 1;

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        (function frame() {
            var timeLeft = animationEnd - Date.now();
            var ticks = Math.max(200, 500 * (timeLeft / duration));
            skew = Math.max(0.8, skew - 0.001);

            confetti({
                particleCount: 1,
                startVelocity: 0,
                ticks: ticks,
                origin: {
                    x: Math.random(),
                    // since particles fall down, skew start toward the top
                    y: (Math.random() * skew) - 0.2
                },
                colors: ['#ffffff'],
                shapes: ['circle'],
                gravity: randomInRange(0.4, 0.6),
                scalar: randomInRange(0.4, 1),
                drift: randomInRange(-0.4, 0.4)
            });

            if (timeLeft > 0) {
                requestAnimationFrame(frame);
            }
        }());
    }



}

// randome math 
const randomeNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)

}

                 //   No Button 
const NoTextEl = () => {
    LoveQuets.innerHTML = '';
    const randomenumber1 = randomeNumber(1, 4)
    console.log(randomenumber1);
    Num1 = 1;
    Num2 = 2;
    Num3 = 3;
    if (Num1 === 1) {
        console.log('shivam kumar singh');
        SadText.innerText = `🤦‍♂️🧐🤔 Click Yes Button`

    }
    if (Num2 === randomenumber1) {
        console.log('shivam kumar singh');
        SadText.innerText = `NO, Click Only Yes Button`

    }
    if (Num3 === randomenumber1) {

        SadText.innerText = `😢💔💔💔💔😥😰🥴`

    }
    if (NoEl) {


        const maxX = window.innerWidth - NoEl.offsetWidth;
        const maxY = window.innerHeight - NoEl.offsetHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        NoEl.style.left = `${randomX}px`;
        NoEl.style.top = `${randomY}px`;
        NoEl.style.position = 'absolute';
    }
    else {

    }
}



NoEl.addEventListener('mouseenter', NoTextEl);
box.addEventListener('click', loveEl);

