function extractFile(input) {
    
    let extracted = input.split('\\');
    let fileName = extracted[extracted.length -1].split('.');
    let extension = fileName.pop();

    fileName = fileName.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')

// Write a function that receives a single string -
//  the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension.
//  (Beware of files like template.bak.pptx, as template.bak should 
//     be the file name, while pptx is the extension).
