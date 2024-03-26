import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/provider/credentials";
import GithubProvider from "next-auth/provider/github";
import GoogleProvider from "next-auth/provider/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/app/libs.prismadb";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter()
};
