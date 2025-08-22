import multer from "multer";
import { v4 as uuid } from "uuid";

//use of multer --> To extract files from incoming requests and store them on the server (or in memory).
//we used the multer Because Express (and body parsers like express.json() or express.urlencoded()) can only handle text-based data — not binary data like files.

const storage = multer.diskStorage({  //This function defines custom storage settings.
  destination(req, file, cb) { // here file is when the user uploads the file that file will appear here in file variable
    cb(null, "uploads");
  },

  //filename() function will use to rename the file
  filename(req, file, cb) { // here file is when the user uploads the file that file will appear here in file variable
    const id = uuid();  //generate the unique id

    const extName = file.originalname.split(".").pop(); // extracting the file extension

    const fileName = `${id}.${extName}`; //new name of file

    cb(null, fileName);  //Passes the new filename back to Multer.
  },
});

export const uploadFiles = multer({ storage }).single("file");  // now upload the file to local storage 
//this middleware also put the file in req.file (request object)