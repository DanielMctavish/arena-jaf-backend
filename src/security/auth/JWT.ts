import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

enum TOKEN_TYPES {
    LOGIN_ADM = "LOGIN_ADM",
    LOGIN_CLIENT = "LOGIN_CLIENT",
    LOGIN_COLAB = "LOGIN_COLAB",
}

export const generatedToken = (type: TOKEN_TYPES, user_id: string): string => {
    const privateSecret: string = process.env.TOKEN_SECRET || "";

    const token = jwt.sign({ type, user_id }, privateSecret, {
        algorithm: "RS512",
        expiresIn: "1h",
    });

    return token;
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

        const tokenVerified = jwt.verify(token, privateSecret) as JwtPayload; // 2 - Verificar se o token é válido e obter o payload
        req.body.token = tokenVerified;

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
