const express = require('express')
var AccountModel = require('../models/accountModel')
module.exports = {
    idParam(req,res,next){
        AccountModel.findById(req.params.id,(err,result)=>{
            req.account= result
            next()
        })
    },
    getAccounts(req,res,next){
        if(req.account){
            return res.status(200).send(req.account.toJSON())
        }else{
            AccountModel.find(function(err,result){
                if(err) return res.sendStatus(500)
                return res.status(200).send(result)
            })
        }
    },
    addAccount(req,res,next){
        if (!req.body.name || !req.body.balance) return res.sendStatus(400)
        //cleanup and create new account
        aNewAccount = new AccountModel({
            name: req.body.name.trim(),
            balance: req.body.balance
        })
        aNewAccount.save(function(err){
            if(err) return next(err)
            return res.status(201).send({id: aNewAccount.id})        
        })
    },
    updateAccount(req,res,next){
        if ((!req.body.name && !req.body.balance) || !req.params.id) return res.sendStatus(400)
        if(req.body.name)    
            req.account.name = req.body.name.trim()
        if(req.body.balance)
            req.account.balance = req.body.balance
        req.account.save((error,account)=>{
            if(error) return next(error)
            return res.status(200).send({id: req.account.id})
        })
    },
    removeAccount(req,res,next){
        if (!req.params.id) return res.sendStatus(400)
        req.account.remove((error)=>{
            if(error) return next(error)
            return res.sendStatus(204)
        })
    }
}