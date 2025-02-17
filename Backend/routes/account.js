const express=require('express');
const { Account } = require('../db');
const { authMiddleware } = require('../middleware');

const router=express.Router();

router.get('/balance',authMiddleware,async function(req,res){
    const account=user.findOne({
        userID:req.userId,
    })

    res.json({
        balance: account.balance,
    })
})

// bad appraoach 
// router.post("/transfer",async function(req,res){
//     const {amount,to}=req.body;

//     const account=await Account.findOne({
//         userId:req.userId,
//     })

//     if(account.balance < amount){
//         return res.status(400).json({
//             message:"Insufficient Amount of Balance in Account"
//         })
//     }

//     const toAccount=await Account.findOne({
//         userID:to,
//     })

//     if(!toAccount){
//         return res.status(400).json({
//             message:"Invalid Account"
//         })
//     }

//     await Account.updateOne({
//         userId:req.userId,
//     },{
//         $inc:{
//             balance:-amount  
//         }
//     })

//     await Account.updateOne({
//         userId:to, 
//      },{
//         $inc:-amount
//      })

//      res.json({
//         message:"Transfer Successful"
//      })

// })

 
// better approach
router.post("/transfer",authMiddleware, async function(req,res){
    const session = mongoose.startSession();
    session.startTransaction();

    const {amount,to}=req.body;

    const account=await Account.findOne({
        userId:req.userId,
    }).session(session);

    if(!account || account.balance<amount){
        await session.abortTransaction()
        return res.status(400).json({
            message:"Invalid Account or Insufficient Amount"
        })
    }

    const toAccount=Account.findOne({
        userId:to,
    }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid Account"
        })
    }
     
    await Account.updateOne({
        userID:to,
    },{
        $dec:{
            balance:-amount
        }
    }).session(session);

    await updateOne({
        userID:req.userID,
    },{
        $inc:{
            balance:amount
        }
    }).session(session);

    await session.commitTransation();

    res.json({
        message:"Transfer Successful"
    })


})


module.exports=router;