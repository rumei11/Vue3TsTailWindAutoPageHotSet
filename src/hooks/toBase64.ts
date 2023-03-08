import { onMounted } from "vue";

type imgObj = {
    $el: string
}

const imgBase64 = (obj: imgObj): Promise<{ base64: string }> => {
    return new Promise((resolve, reject) => {
        onMounted(() => {
            let imgDomimgDom = document.getElementById(obj.$el) as HTMLImageElement;

            imgDomimgDom.onload = _ => {
                let canavsEl = document.createElement('canvas');
                let ctx = canavsEl.getContext('2d')
                canavsEl.width = imgDomimgDom.width;
                canavsEl.height = imgDomimgDom.height;
                ctx?.drawImage(imgDomimgDom, 0, 0, imgDomimgDom.width, imgDomimgDom.height)

                resolve({
                    base64: canavsEl.toDataURL('image/png')
                })
            }
        })
    })

};

export default imgBase64;