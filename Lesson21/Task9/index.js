function finishList() {
    let elem = document.querySelector('ul');    
    let elem3 = document.querySelector('.special');    
    let p = document.createElement('li');
    elem.prepend(p);    
    p.textContent = 1;
    let a = document.createElement('li');
    elem.append(a);
    a.textContent = 8;
    let c = document.createElement('li');
    elem3.before(c);
    c.textContent = 4;
    let d = document.createElement('li');
    elem3.after(d);
    d.textContent = 6;
}

finishList();
    // let b = document.createElement('li');
    // elem.append(b);
    // a.textContent = 4;

    //   for (let i = 0; i < elem.length; i++) {
    //      //x = 1;
    //      //console.dir(elem.length);
    //       gg = elem[i].textContent;

    //           if (x < gg) {
    //             elem.length += 1;
    //               let p = document.createElement('li');
    //               elem1.append(p);
    //               p.textContent = x;
    //               x +=1;

    //               console.dir(elem.length);
    //           } 


    // //     //x +=1;
    //      }

    // for (let i = 0; i < elem.length; i++) {
    //     gg = elem[i].textContent;
    //    for (let x = 1; x < 11; x++) {
    //         if (x < gg) {
    //             let p = document.createElement('li');
    //             elem1.append(p);
    //             p.textContent = x;
    //         }
    //     }
    //    }
    //console.dir(gg);

    //let gg = index(elem);
    //let gg = elem.textContent;
    //let dom = document.createElement('button');
    //dom.textContent = buttonText;
    //elem.append(dom);
    //console.dir(elem2);


