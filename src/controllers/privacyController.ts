import { Request, Response, response } from "express";
import { privacyConfig } from "../models/privacy";

class privacyController {

    static findUserPrivacy = (request, response: Response) => {
        privacyConfig.findOne((error, privacy) => {
            return response.json(privacy);
        })
    }

    static creatPrivacyObject = (request: Request, response: Response) => {
        const notification = new privacyConfig(request.body);

        notification.save((error) => {
            if(!error) {
               return response.status(201).json();
            }

            return response.status(500).send({message: `${error.message} - Falha ao Mudar Status`})

        })
    }

    static handlePrivacyState = (request: Request, response: Response) => {
        const id = request.params.id;

        privacyConfig.findByIdAndUpdate(id, {
            $set: request.body
        }, (error) => {
          if(!error) {
            response.status(200).send({message: 'atualizado'})
          } else {
            response.status(500).send({message: error.message})
          }
        }
       )
    }


}

export { privacyController };