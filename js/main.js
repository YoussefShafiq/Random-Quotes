let quotes = [
    "We cannot solve problems with the kind of thinking we employed when we came up with them. —Albert Einstein",
    "Learn as if you will live forever, live like you will die tomorrow. Mahatma Gandhi",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too. Mark Twain",
    "When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out. Eleanor Roosevelt",
    "When you change your thoughts, remember to also change your world. Norman Vincent Peale",
    "It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest. Walter Anderson",
    "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together. Diane McLaren",
    "You never fail until you stop trying. Albert Einstein",
    "The worst part of success is trying to find someone who is happy for you. Bette Midler",
    "Success is getting what you want, happiness is wanting what you get. W. P. Kinsella",
    "Have no fear of perfection , you will never reach it. Salvador Dali",
    "All that is gold does not glitter, Not all those who wander are lost. J.R.R. Tolkien",
    "Paint the flying spirit of the bird rather than its feathers.",
    "Be Still.",
    "Fear Not.",
    "I Can.",
    "The only joy in the world is to begin. Cesare Pavese",
    "Nobody can be uncheered with a balloon. Winnie the Pooh",
    "The most wasted of days is one without laughter. E. E. Cummings",
    "Every moment is a fresh beginning. T.S. Eliot",
    "To win big, you sometimes have to take big risks. Bill Gates",
    "He who is brave is free. Seneca",
    "You can totally do this. Helen Keller",
    "We can do anything we want to if we stick to it long enough. Helen Keller",
    "The fastest road to meaning and success: choose one thing and go all in. Maxime Lagacé",
    "Solitary trees, if they grow at all, grow strong. Winston Churchill",
    "Try again. Fail again. Fail better. Samuel Beckett",
    "Impossible is for the unwilling. John Keats",
    "I can and I will. Unknown",
    "No pressure, no diamonds. Thomas Carlyle",
    "Don't tell people your plans. Show them your results. Unknown",
    "Prove them wrong. Unknown",
    "Good things happen to those who hustle. Anaïs Nin",
    "Go forth on your path, as it exists only through your walking. Augustine of Hippo",
    "No guts, no story. Chris Brady",
    "Take the risk or lose the chance. Unknown",
    "Screw it, let's do it. Richard Branson",
    "Boldness be my friend. William Shakespeare",
    "Keep going. Be all in. Bryan Hutchinson",
    "Dream big. Pray bigger. Unknown",
    "If you want it, work for it. Leave no stone unturned. Unknown",
    "Stay foolish to stay sane. Maxime Lagacé",
    "And so the adventure begins. Unknown",
    "You can if you think you can. George Reeves",
    "Whatever you are, be a good one. Abraham Lincoln",
    "Broken crayons still color. Unknown",
    "Grow through what you go through. Unknown",
    "Do it with passion or not at all. Unknown",
    "Once you choose hope, anythings possible. Christopher Reeve",
    "If it matters to you, you will find a way. Charlie Gilkey",
    "She believed she could, so she did. Unknown",
    "The past does not equal the future. Tony Robbins",
    "Forget about style; worry about results. Bobby Orr",
    "Success is the child of audacity. Benjamin Disraeli",
    "Whatever you do, do with all your might. Marcus Tullius Cicero",
    "If you're going through hell, keep going. Winston Churchill",
    "When nothing goes right, go left. Unknown",
    "Every noble work is at first impossible. Thomas Carlyle",
    "We are twice armed if we fight with faith. Plato",
    "Be faithful to that which exists within yourself. André Gide",
    "Let him that would move the world first move himself. Socrates",
    "Persistence guarantees that results are inevitable. Paramahansa Yogananda",
    "My life is my message. Mahatma Gandhi"

]

let prevQuotes = []
console.log(prevQuotes);


function genQoute() {
    let len = quotes.length
    let Q = Math.floor(Math.random() * len);
    let quote = quotes[Q]
    if (prevQuotes.length == 0) {
        document.getElementById('quote').innerHTML = quote
        prevQuotes.push(quote)
    }
    else {
        let unique = true
        for (let i = 0; i < prevQuotes.length; i++) {
            if (quote === prevQuotes[i]) {
                unique = false
            }
        }
        if (unique) {
            document.getElementById('quote').innerHTML = quote;
            prevQuotes.push(quote)
        } else if (prevQuotes.length == quotes.length) {
            prevQuotes.splice(0)
            genQoute()
        }
        else {
            genQoute()
        }
    }
}