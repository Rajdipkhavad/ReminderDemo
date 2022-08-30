# ReminderDemo

1. Run this db script for create db 

USE [master]
GO

/****** Object:  Database [ReminderDemo]    Script Date: 2022-08-31 1:00:44 AM ******/
CREATE DATABASE [ReminderDemo]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ReminderDemo', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ReminderDemo.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ReminderDemo_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\ReminderDemo_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ReminderDemo].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO



2. Run this db script for create Table 
USE [ReminderDemo]
GO

/****** Object:  Table [dbo].[Reminder]    Script Date: 2022-08-31 1:02:45 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Reminder](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NULL,
	[Description] [nvarchar](2000) NULL,
	[IsComplated] [bit] NOT NULL,
	[DueDate] [datetime] NULL,
 CONSTRAINT [PK_Reminder] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Reminder] ADD  CONSTRAINT [DF_Reminder_IsComplated]  DEFAULT ((0)) FOR [IsComplated]
GO



3. Start the Remainder Backend in visual studio
4. update connection String in Remainder Backend for the created db
5. run the project 
6. open Reminder.Frontend in Vs code
7. Hit the npm install in command line in Vs code
8. update environment file for baseUrl, In baseUrl you have to add api project URL