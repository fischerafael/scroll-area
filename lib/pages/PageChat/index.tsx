import React from "react";

export const PageChat = () => {
  return (
    <div className="h-[100vh] bg-pink-200 grid-rows-[80px,1fr] grid justify-items-center py-6">
      <div className="bg-red-100 w-full max-w-[1000px]">
        <p>logo</p>
      </div>

      <div className="bg-red-200 w-full max-w-[1000px] relative">
        <div className="bg-white absolute top-0 bottom-0 flex flex-col gap-4 overflow-y-auto w-full ">
          {messages.map((m, index) => {
            const isOdd = index % 2 === 1;
            console.log(isOdd);
            return (
              <div
                className={`bg-gray-100 h-fit p-8 max-w-[800px] ${
                  isOdd ? "self-start" : "self-end"
                }`}
                key={index}
              >
                Existem 195 países no mundo atualmente, reconhecidos pela ONU.
                Destes, 193 são membros das Nações Unidas, e 2 têm o status de
                observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser uma
                lista específica ou de uma região, posso detalhar conforme
                necessário!
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const PageChatFlex = () => {
  return (
    <div className="h-[100vh] bg-pink-200 items-center flex flex-col py-4">
      <div className="bg-red-100 w-full h-[80px] max-w-[1000px]">
        <p>logo</p>
      </div>

      <div className="flex-1  bg-pink-300 w-full max-w-[1000px] relative">
        <div className="bg-white absolute top-0 bottom-0 flex flex-col gap-4 overflow-y-auto w-full ">
          {messages.map((m, index) => {
            const isOdd = index % 2 === 1;
            console.log(isOdd);
            return (
              <div
                className={`bg-gray-100 h-fit p-8 max-w-[800px] ${
                  isOdd ? "self-start" : "self-end"
                }`}
                key={index}
              >
                Existem 195 países no mundo atualmente, reconhecidos pela ONU.
                Destes, 193 são membros das Nações Unidas, e 2 têm o status de
                observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser uma
                lista específica ou de uma região, posso detalhar conforme
                necessário!
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-red-100 w-full h-[80px] max-w-[1000px]">
        <p>logo</p>
      </div>
    </div>
  );
};

const messages = [
  "Existem 195 países no mundo atualmente, reconhecidos pela ONU. Destes, 193 são membros das Nações Unidas, e 2 têm o status de observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser umab lista específica ou de uma região, posso detalhar conforme ecessário!",
  "Existem 195 países no mundo atualmente, reconhecidos pela ONU. Destes, 193 são membros das Nações Unidas, e 2 têm o status de observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser umab lista específica ou de uma região, posso detalhar conforme ecessário!",
  "Existem 195 países no mundo atualmente, reconhecidos pela ONU. Destes, 193 são membros das Nações Unidas, e 2 têm o status de observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser umab lista específica ou de uma região, posso detalhar conforme ecessário!",
  "Existem 195 países no mundo atualmente, reconhecidos pela ONU. Destes, 193 são membros das Nações Unidas, e 2 têm o status de observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser umab lista específica ou de uma região, posso detalhar conforme ecessário!",
  "Existem 195 países no mundo atualmente, reconhecidos pela ONU. Destes, 193 são membros das Nações Unidas, e 2 têm o status de observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser umab lista específica ou de uma região, posso detalhar conforme ecessário!",
  "Existem 195 países no mundo atualmente, reconhecidos pela ONU. Destes, 193 são membros das Nações Unidas, e 2 têm o status de observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser umab lista específica ou de uma região, posso detalhar conforme ecessário!",
  "Existem 195 países no mundo atualmente, reconhecidos pela ONU. Destes, 193 são membros das Nações Unidas, e 2 têm o status de observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser umab lista específica ou de uma região, posso detalhar conforme ecessário!",
  "Existem 195 países no mundo atualmente, reconhecidos pela ONU. Destes, 193 são membros das Nações Unidas, e 2 têm o status de observadores: o Vaticano (Santa Sé) e a Palestina. Se quiser umab lista específica ou de uma região, posso detalhar conforme ecessário!",
];
