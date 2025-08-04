"use client"

import axios from "axios"
import { apiEndPoint } from "@/lib/utils"
import { CustomerInterest } from "./types/types"
// import { toast } from "sonner"

interface Props {
    customerInterest: CustomerInterest
}

export const submitCustomerInterest = async (customer: Props): Promise<{ message: string }> => {
    console.log('customer interest...', customer)

    try {
        const payload: CustomerInterest = {
            first_name: customer.customerInterest.first_name,
            last_name: customer.customerInterest.last_name,
            email: customer.customerInterest.email,
            phone_number: customer.customerInterest.phone_number,
            interest: customer.customerInterest.interest,
        }

        const url = `service-request/create-service-request`
        const response = await axios.post(`${apiEndPoint}/${url}`, payload)
        console.log('successfully created customer interest: ', response.data)
        return response.data;
    } catch (error) {
        console.error("Error fetching employees: ", error);
        return { message: (error as Error)?.message ?? "Unknown error" };
    }
}
