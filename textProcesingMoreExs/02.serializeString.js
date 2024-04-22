function serializeString(input) {
    const str = input[0];
    const serialized = {};

    // Iterate over the string to build the serialized object
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!serialized.hasOwnProperty(char)) {
            serialized[char] = [];
        }
        serialized[char].push(i);
    }

    // Print the serialized format
    for (const char in serialized) {
        const indexes = serialized[char].join('/');
        console.log(`${char}:${indexes}`);
    }
}

serializeString(["abababa"])
serializeString(["avjavamsdmcalsdm"])


// You have been tasked to serialize a string. The serialization is done specially,
//  in which a character from that string is saved with the indexes at which it is found.
// The input will consist array, containing a single string, which may consist of ANY ASCII characters.
//  Your task is to serialize the string in the following way:
// {char}:{index1}/{index2}/{index3}
// The char will be the character, and the indexes will be the indexes it is found at in the string.

