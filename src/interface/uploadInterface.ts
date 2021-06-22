export interface Upload {
    Path?: string,
    Name?: string,
    SetType?: string,
    Length?: string | number,
}

export interface UploadFile {
    location?: string,
    path?: string,
    nameOld?: string,
    nameNew?: string,
    type?: string,
}
