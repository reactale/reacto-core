type TPrevRectoContext = { 
    // name of the reacto if | calc | cfg | var
    name: string,
    // loop reacto can have iterationCount num, if can have Boolean          
    data?: string | number | boolean   
}

let ___isPrintOff = false
let ___prevReacto:TPrevRectoContext = { name: '', data: '' }

export const isPrintOff = () => ___isPrintOff
export const setPrintOff = (v:boolean) => ___isPrintOff = v

export const getPrevReacto = () => ___prevReacto
export const setPrevReacto = (r: TPrevRectoContext) => ___prevReacto = r
