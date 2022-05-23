//2
function minMax(arr) {
	//return [Math.min(arr),Math.max(arr)]
	return [Math.min(...arr),Math.max(...arr)]
}

//3
function FirstReverse(str) {
  return str.split("").reverse().join("");
  return str;

}

//4
function LongestWord(sen) {
    let word = sen.match(/\w+/g);

    let longest = word[0];

     for (i=0; i < word.length; i++) {
         if (word[i].length > longest.length) {
             longest = word[i];
         }
     }

    return longest;

}

//5
function addUp(num) {
	let ans = 0;
	for (i = 1; i <= num; i++) {
		ans += i
	}
	return ans
}