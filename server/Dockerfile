FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
EXPOSE 8000
CMD npx prisma migrate dev && npm run seed && npm run dev

#  step 1 get node image
#  step 2 (set working directory)
#  step 3 copy package.json and package-lock.json
#  step 4 install dependencies
#  step 5 copy the rest of your application code
#  step 6 generate prisma client
#  step 7 expose the port your app runs on


