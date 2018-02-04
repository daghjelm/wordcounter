//select the textarea
let input = document.querySelectorAll('textarea')[0],
wordCount = document.querySelectorAll('#wordCount')[0],
characterCount = document.querySelectorAll('#characterCount')[0],
sentenceCount = document.querySelectorAll('#sentenceCount')[0],
readingTime = document.querySelectorAll('#readingTime')[0],
words = [],
sentences = [];

const count = () => {
	words = input.value.match(/\b[-?(\w+)?]+\b/gi);
	sentences = input.value.split(/[.|!|?]/g);
	chars = input.value.length;

	if(words != null) {
		wordCount.innerHTML = words.length;
	} else {
		wordCount.innerHTML = 0;
	}

	if(sentences != null) {
		sentenceCount.innerHTML = sentences.length - 1;
	} else {
		sentenceCount.innerHTML = 0;
	}

	characterCount.innerHTML = chars;
	readingTime.innerHTML = calc(words);
}

let calc = (words) => {
	if (words != 0 && words != null) {
		let seconds = Math.floor(words.length * 60 / 27);
		if (seconds > 59) {
			var minutes = Math.floor(seconds / 60);
			seconds = seconds - minutes * 60;
			return minutes + "m " + seconds + "s";
		} else {
			return seconds + "s";
		}
	}
	return "0s";
}

input.addEventListener('keyup', count);
