let num=65;
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        let s=String.fromCharCode(num);
        process.stdout.write(s);
    }
    console.log("");
    
    num=num+1;
}