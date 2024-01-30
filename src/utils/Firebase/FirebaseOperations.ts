import firebase from "firebase-admin"
import firebaseKey from "./arena-plataform-firebase-adminsdk-o14vz-c7a83f13de.json"
import { v4 } from "uuid"

firebase.initializeApp({
    credential: firebase.credential.cert({
        clientEmail: firebaseKey.client_email,
        privateKey: firebaseKey.private_key,
        projectId: firebaseKey.project_id
    })
})

export interface FilePhoto {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    buffer: Buffer,
    size: number
}

const bucket = firebase.storage().bucket("gs://arena-plataform.appspot.com")

//upload a single image
export async function uploadSingleImage(folderType: string, file: FilePhoto): Promise<string> {
    const fileRef = bucket.file(`${folderType}/${v4()}_${file.originalname}`)
    await fileRef.save(file.buffer, {
        metadata: {
            contentType: file.mimetype
        }
    })

    await fileRef.makePublic()
    const currentUrl = `https://storage.googleapis.com/${bucket.name}/${fileRef.name}`;

    return currentUrl;
}


export async function uploadMultipleImages(folderType: string, files: Array<FilePhoto>): Promise<Array<string>> {
    const urlFiles: Array<string> = []

    files.forEach(async (file) => {
        const fileRef = bucket.file(`${folderType}/${v4()}_${file.originalname}`)
        await fileRef.save(file.buffer, {
            metadata: {
                contentType: file.mimetype
            }
        }).then(() => {
            return fileRef.makePublic()
        }).then(() => {
            urlFiles.push(`https://storage.googleapis.com/${bucket.name}/${fileRef.name}`)
        })
    })

    return urlFiles;
}


export async function deleteSingleImage(url: string) {
    try {
        const currentUrlFile = bucket.file(url.replace(`https://storage.googleapis.com/${bucket.name}/`, ''));
        const currentUrl = await currentUrlFile.delete();
        return { msg: 'imagem excluída', currentUrl }
    } catch (error: any) {
        console.error('Erro ao excluir a imagem:', error.message);
        throw error;
    }
}


