function reverse(str, result = ''){
    if (!str) {
        return result;
    }
    result += str[str.length-1];
    return reverse(str.substring(0,str.length-1), result);
}

console.log(reverse('awesome'));