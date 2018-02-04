//select the textarea
let input = document.querySelectorAll('textarea')[0];
let wordCount = document.querySelectorAll('#wordCount')[0];
let characterCount = document.querySelectorAll('#characterCount')[0];
let sentenceCount = document.querySelectorAll('#sentenceCount')[0];
let words = [];
let sentences = [];

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
}

input.addEventListener('keyup', count);
