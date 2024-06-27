const { PrismaClient } = require('@prisma/client');


const createRecipient = async (recipientData) => {
    return await prisma.recipient.create({
        data,
    });

};


const getRecipients = async () => {
    return await prisma.recipient.findMany();

};


const getRecipientById = async (id) => {
    return await prisma.recipient.findUnique({
        where: { id },
    });


};


const updateRecipient = async (id, recipientData) => {
    const recipient = await prisma.recipient.update({
        where: { id },
        data,
        
    });

    };


const deleteRecipient = async (id) => {
    return await prisma.recipient.delete({
        where: { id },
    });
};

module.exports = {
    createRecipient,
    getRecipients,
    getRecipientById,
    updateRecipient,
    deleteRecipient,
};