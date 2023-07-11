import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";


export const generatedToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const privateSecret: string = process.env.TOKEN_SECRET || "";

    try {
        const token = jwt.sign({
            type: req.params.type,
            user_id: req.params.user_id
        },
            privateSecret,
            {
                expiresIn: "1h",
            });

        res.status(201).json({ msg: "token criado com sucesso", token });

    } catch (error: any) {
        res.status(500).json({ msg: error.message })
    }
};

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const privateSecret: string = process.env.TOKEN_SECRET || "";

    try {
        const token = req.headers.authorization?.split(" ")[1]; // 1 - Obter token do cabeçalho "Authorization" (formato: Bearer <token>)

        if (!token) {
            res.status(401).json({ message: "Token não fornecido" }); // 5 - Retornar erro de token não fornecido no formato de objeto HTTP
            return;
        }

        jwt.verify(token, privateSecret)

        next(); // Continuar para o próximo middleware
    } catch (error: any) {
        if (error.name === "JsonWebTokenError") {
            res.status(401).json({ message: "Token inválido" }); // 3 - Retornar erro de token inválido no formato de objeto HTTP
        } else if (error.name === "TokenExpiredError") {
            res.status(401).json({ message: "Token expirado" }); // 4 - Retornar erro de token expirado no formato de objeto HTTP
        } else {
            res.status(500).json({ message: "Erro ao verificar o token" }); // Tratar outros erros de verificação do token
        }
    }
};
