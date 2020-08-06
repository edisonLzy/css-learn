export default function(){
    const timing = window.performance.timing;
    const start = timing.navigationStart
    return {
        dnsLookup:timing.domainLookupEnd  - timing.domainLookupStart,
        tcp:timing.connectEnd - timing.connectStart,
        requestTime:timing.responseStart - timing.requestStart,
        responeTime:timing.responseEnd - timing.responseStart,
        dom:timing.domComplete - timing.domInteractive,
        startRender:timing.responseStart - start,
        domContentLoad:timing.domContentLoadedEventEnd - start,
        onload:timing.loadEventEnd - start
    }
}

interface buy{
    name:string;
    sum(num:number,num2:number):number;
}
const sum:buy ={
    name:'123',
    sum:(a,b)=>a+b
}
