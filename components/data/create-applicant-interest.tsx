"use client"

import axios from "axios"
import { apiEndPoint } from "@/lib/utils"
import { ApplicantInterest } from "./types/types"
import { toast } from "sonner"

interface Props {
    applicantInterest: ApplicantInterest
}

export const submitApplicant = async (applicant: Props): Promise<{ message: string }> => {
    console.log('applicant interest...', applicant)

    try {
        const payload: ApplicantInterest = {
            first_name: applicant.applicantInterest.first_name,
            last_name: applicant.applicantInterest.last_name,
            email: applicant.applicantInterest.email,
            phone_number: applicant.applicantInterest.phone_number,
            interest: applicant.applicantInterest.interest,
            cv: applicant.applicantInterest.cv,
        }

        const url = `applicants/create-applicant`
        const response = await axios.post(`${apiEndPoint}/${url}`, payload)
        console.log('successfully created applicant interest: ', response.data)
        
        toast.success("Applicant submission was successful")
        return response.data;
    } catch (error) {
        console.error("Error fetching employees: ", error);
        return { message: (error as Error)?.message ?? "Unknown error" };
    }
}
