function emailChainCount(subject) {
    // Nullish coalescing operator (??)
    let result = subject.match(/(?:fw|fwd|re):/gi) ?? [];
    return result.length;
}

// console.log(emailChainCount("Re: Meeting Notes"));
// console.log(emailChainCount("Meeting Notes"));
// console.log(emailChainCount("Re: re: RE: rE: Meeting Notes"));
// console.log(emailChainCount("Re: Fwd: Re: Fw: Re: Meeting Notes"));
// console.log(emailChainCount("re:Ref:fw:re:review:FW:Re:fw:report:Re:FW:followup:re:summary:Fwd:Re:fw:NextStep:RE:FW:re:Project:Fwd:Re:fw:Notes:RE:re:Update:FWD:Re:fw:Summary"));
