import { onMounted } from "vue";

type imgObj = {
    $el: string
}

const imgBase64 = (obj: imgObj): Promise<{ base64: string }> => {
    return new Promise((resolve, reject) => {
        onMounted(() => {
            let new = document.getElementById(obj.$el) as HTMLImageElement;

            new.onload = _ => {
                let canavsEl = document.createElement('canvas');
                let ctx = canavsEl.getContext('2d')
                canavsEl.width = new.width;
                canavsEl.height = new.height;
                ctx?.drawImage(new, 0, 0, new.width, new.height)

                resolve({
                    base64: canavsEl.toDataURL('image/png')
                })
            }
        })
    })

};

export default imgBase64;