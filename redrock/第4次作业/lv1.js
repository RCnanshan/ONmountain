function f(x){
    if(x<1){
        return-1;
    }
    if(x==1||x==2){
        return 1;
    }else{
        return f(x-1)+f(x-2);
    }
}
var sum=f(8)
console.log(sum);