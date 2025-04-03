//ở đây ứng viên chỉ dùng kiến thức đang có, tức là biết gì dùng đó
//có lẽ AI sẽ có các cách giải khác hiệu quả hơn, nhưng đó là ứng dụng trong công việc thực tế, không phải bài test

async function processWithDelayV1(numbers: number[], delay: number): Promise<void> { //ban đầu ứng viên tính viết thế này, nhưng không hình dùng được viết thế này pause ntn
    if (!numbers) throw new Error("Không hợp lệ")
    if (!Array.isArray(numbers)) throw new Error("Không phải array")
    if (numbers.length == 0) return Promise.resolve()
    if (numbers.some(el => !Number.isInteger(el))) throw new Error("Mảng không hợp lệ")
    setTimeout(() => {
        let first = numbers.shift()
        if (!first) return
        console.log(first);
        processWithDelayV1(numbers, delay)
    }, delay)
}
const coreProcess = {
    pause: false,
    isCancel: false,
    rest: [] as number[],
    callback: (value: number) => { },
    timeout: null as unknown,
    processWithDelayV2: async function (numbers: number[], delay: number): Promise<void> {
        if (!numbers) throw new Error("Không hợp lệ")
        if (!Array.isArray(numbers)) throw new Error("Không phải array")
        if (numbers.length == 0) return Promise.resolve()
        if (numbers.some(el => !Number.isInteger(el))) throw new Error("Mảng không hợp lệ")
            console.log(coreProcess.isCancel);
            
        for (let index = 0; index < numbers.length; index++) {
            if (coreProcess.isCancel) break;
            const num = numbers[index]
            if (!Number.isInteger(num)) throw new Error("Mảng không hợp lệ")
            if (coreProcess.pause) {
                coreProcess.rest = numbers.slice(index)
                break;
            } else {
                const pros = new Promise<number>((resolve) => {
                    coreProcess.timeout = setTimeout(() => {
                        resolve(num)
                    }, delay)
                })
                const result = await pros
                coreProcess.callback?.(result)
            }
        }
    },
    resume: (delay: number) => {
        console.log(coreProcess.rest, coreProcess.callback)
        coreProcess.processWithDelayV2(coreProcess.rest, delay)
    },
    setPause: (state: boolean) => {
        console.log(state);
        coreProcess.pause = state
    },
    cancel: () => {
        if (coreProcess.timeout) {
            coreProcess.isCancel = true
            clearTimeout(coreProcess.timeout as number)
        }
    }
}




