"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreUser } from "@/lib/authSlice";
import type { dispatch } from "@/lib/store";

export default function PrevAuth() {
    const dispatch = useDispatch<dispatch>();

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

      if (savedUser) {
            const user = JSON.parse(savedUser)
            dispatch(restoreUser(user))
        }
    }, [dispatch]);

    return null;
}