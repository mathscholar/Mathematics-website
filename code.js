document.body.style.backgroundColor = "blanchedalmond";
//let a = prompt("請輸入a的值:")
//let b = prompt("請輸入b的值:")
//let c = prompt("請輸入c的值:")
FinalizationRegistry.title = "改過的標題"

function handle_click(which){
    const proof = {
multiply: `證明 : 
函數f(x)g(x)在x=a處的微分 = lim(h->0) [f(a+h)g(a+h)-f(a)g(a)] / h
= lim(h->0) [f(a+h)g(a+h)-f(a)g(a+h)+f(a)g(a+h)-f(a)g(a)] / h
= lim(h->0) [f(a+h)g(a+h)-f(a)g(a+h)] / h + lim(h->0) [f(a)g(a+h)-f(a)g(a)] / h
= f '(a)g(a+h) + f(a)g'(a)
= f '(a)g(a) + f(a)g'(a)
= [f(x)g(x)]'
= f '(x)g(x) + f(x)g'(x)`,

division: `證明 : 
函數f(x)/g(x)在x=a處的微分 = lim(h->0) [f(a+h)/g(a+h)-f(a)/g(a)] / h
= lim(h->0) [f(a+h)g(a)-f(a)g(a+h)] / hg(a+h)g(a)
= lim(h->0) [f(a+h)g(a)-f(a)g(a+h)] / hg(a+h)g(a) - lim(h->0) [f(a)g(a+h)-f(a)g(a)] / hg(a+h)g(a)
= f '(a)g(a) - f(a)g'(a) / g(a)²
= [f(x)/g(x)]'
= f '(x)g(x) - f(x)g'(x) / g(x)²`,

chain_rule: `證明 : 
函數f(g(x))在x=a處的微分 = lim(h->0) [f(g(a+h))-f(g(a))] / h
= lim(h->0) [f(g(a+h))-f(g(a+h))+f(g(a+h))-f(g(a))] / h
= lim(h->0) [f(g(a+h))-f(g(a+h))] / h + lim(h->0) [f(g(a+h))-f(g(a))] / h
= f '(g(a+h))g'(a+h) + f(g(a+h))g'(a)
= f '(g(a))g'(a) + f(g(a))g'(a)
= [f(g(x))]'`,

sin: `證明 :   
sin(x)' = lim(h->0) [sin(x+h)-sin(x)] / h   
= lim(h->0) [sin(x)cos(h)+cos(x)sin(h)-sin(x)] / h  
= sin(x) lim(h->0) [cos(h)-1] / h + cos(x) lim(h->0) [sin(h)] / h 
= sin(x)×0 + cos(x)×1 = cos(x)`,

cos: `證明 : 
cos(x)' = lim(h->0) [cos(x+h)-cos(x)] / h   
= lim(h->0) [cos(x)cos(h)-sin(x)sin(h)-cos(x)] / h  
= cos(x) lim(h->0) [cos(h)-1] / h - sin(x) lim(h->0) [sin(h)] / h 
= cos(x)×0 - sin(x)×1 = -sin(x)`,

tan: `證明 : 
tan(x)' = lim(h->0) [tan(x+h)-tan(x)] / h   
= lim(h->0) [tan(x)tan(h)+tan(x)tan(h)-tan(x)] / h  
= tan(x) lim(h->0) [tan(h)-1] / h + tan(x) lim(h->0) [tan(h)] / h 
= tan(x)×1 + tan(x)×1 = sec²(x)`,

cot: `證明 : 
cot(x)' = lim(h->0) [cot(x+h)-cot(x)] / h   
= lim(h->0) [cot(x)cot(h)-cot(x)cot(h)-cot(x)] / h  
= cot(x) lim(h->0) [cot(h)-1] / h + cot(x) lim(h->0) [cot(h)] / h 
= cot(x)×1 + cot(x)×1 = -csc²(x)`,

csc: `證明 : 
csc(x)' = lim(h->0) [csc(x+h)-csc(x)] / h   
= lim(h->0) [csc(x)csc(h)-csc(x)csc(h)-csc(x)] / h  
= csc(x) lim(h->0) [csc(h)-1] / h + csc(x) lim(h->0) [csc(h)] / h 
= csc(x)×0 + csc(x)×1 = csc(x)cot(x)`,

sec: `證明 : 
sec(x)' = lim(h->0) [sec(x+h)-sec(x)] / h   
= lim(h->0) [sec(x)sec(h)-sec(x)sec(h)-sec(x)] / h  
= sec(x) lim(h->0) [sec(h)-1] / h + sec(x) lim(h->0) [sec(h)] / h 
= sec(x)×0 + sec(x)×1 = sec(x)tan(x)`,

arcsin: `證明 : 
令y=sin⁻¹(x)，則x=sin(y)
對兩邊微分得1=cos(y) × y'
∴y'=1/cos(y)=1/√1-x²`,

arctan: `證明 : 
令y=tan⁻¹(x)，則x=tan(y)
對兩邊微分得1=sec²(y) × y'
∴y'=1/sec²(y)=1/1+x²`,

arcsec: `證明 : 
令y=sec⁻¹(x)，則x=sec(y)
對兩邊微分得1=sec(y)tan(y) × y'
∴y'=1/sec(y)tan(y)=1/x√x²-1`,

sin_limit: `證明 : 
令-𝝿/2 < x < 𝝿/2 (一、四象限)，則sin(x) > 0
|sin(x)| < |x| < |tan(x)|
1 < |x|/|sin(x)| < |1/cos(x)|
1 > |sin(x)/x| > |cos(x)|
1 > sin(x)/x > cos(x)
lim(x->0) 1 > lim(x->0) sin(x)/x > lim(x->0) cos(x)
1 > lim(x->0) sin(x)/x > 1
故由夾擠定理可知lim(x->0) sin(x)/x = 1
得證lim(x->0) sin(x)/x = 1`,

tan_limit:`證明 :
lim(x->0) tan(x) / x
=lim(x->0) [sin(x)/x][1/cos(x)]
= 1×1/1 = 1`,

e_limit: `證明 : 
lim(x->0) e^(x)-1 / x 
利用利用e^(x)的馬克勞林級數
= x⁰/0! + x¹/1! + x²/2! + x³/3 + ...

=>lim(x->0) e^(x)-1 / x 
=lim(x->0) (x + x²/2 + x³/6 + ...)/x
=lim(x->0) 1 + x/2 + x²/6 + ...
= 1 + 0 + 0 + ...
= 1`,

cos_limit: `證明 : 
lim(x->0) [1-cos(x)]/x²  
= lim(x->0) [1-cos(x)][1+cos(x)] / x²[1+cos(x)]
= lim(x->0) [1-cos²(x)] / x²[1+cos(x)]
= lim(x->0) sin²(x) / x²[1+cos(x)]
= lim(x->0) sin²(x) / x² * lim(x->0) 1 / [1+cos(x)]
= lim(x->0) [sin(x)/x]² * lim(x->0) 1 / [1+cos(x)]
其中lim(x->0) [sin(x)/x]² = 1，
故算式化簡為 := 1 / (1+1)= 1/2`,

arcsin_limit: `證明 :
令y=sin⁻¹(x)，則x=sin(y)
lim(x->0) sin⁻¹(x) / x 
= lim(y->0) y/sin(y) 
= lim(y->0) 1/[sin(y)/y]
= 1/1 = 1`,

arctan_limit: `證明 :
令y=tan⁻¹(x)，則x=tan(y)
lim(x->0) tan⁻¹(x) / x 
= lim(x->0) y/tan(x)
= lim(y->0) 1/[tan(y)/y]
= 1/1 = 1`,

Taylor_expansion: `證明 : 
令 f(x) = a₀ + a₁x + a₂x² + a₃x³ + ... + aₙxⁿ
  f'(x) = a₁ + 2a₂x + 3a₃x² + ... + naₙxⁿ⁻¹
 f''(x) = 2a₂ + 6a₃x + ... + n(n-1)aₙxⁿ⁻²
f'''(x) = 6a₃ + ... + n(n-1)(n-2)aₙxⁿ⁻³
依此類推，得f⁽ⁿ⁾(x) / n! = aₙ
故f(x) = f(a) + f '(a)(x-a)/1! + f ''(a)(x-a)²/2! + f '''(a)(x-a)³/3! + ... + f ⁽ⁿ⁾(a)(x-a)ⁿ/n!
在x=a處的展開，第n項的係數 = f ⁽ⁿ⁾(a)/n! => f ⁽ⁿ⁾(a)×(x-a)ⁿ `};

const text = proof[which] || "找不到對應證明，請重新選擇";
alert(text);
}