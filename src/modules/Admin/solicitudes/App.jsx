import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { columns, users } from "./data";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalBackdrop, setModalBackdrop] = React.useState("blur");
  const [modalPlacement] = React.useState("center");
  const [selectedUser, setSelectedUser] = React.useState(null);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    onOpen();
  };

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={
              <span className="text-base text-gray-500">{user.email}</span>
            }
            name={
              <span className="font-bold text-lg text-black">{user.name}</span>
            }
          ></User>
        );
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Button
              key="blur"
              variant="flat"
              color="success"
              onClick={() => {
                setModalBackdrop("blur");
                handleOpenModal(user);
              }}
              className="capitalize"
            >
              Ver evento
            </Button>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div>
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              className="font-bold text-black text-base"
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell className="text-base">
                  {renderCell(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {selectedUser && (
        <Modal
          isOpen={isOpen}
          placement={modalPlacement}
          onOpenChange={onOpenChange}
          backdrop={modalBackdrop}
          className="max-w-3xl"
          scrollBehavior="inside"
        >
          <ModalContent>
            <ModalHeader className="flex justify-between items-center text-2xl py-4 px-6 border-b border-gray-200 bg-gray-100 rounded-t-xl">
              <span>Solicitud de Evento</span>
            </ModalHeader>
            <ModalBody className="p-0">
              <div className="flex flex-col ">
                <div className="sticky top-0 bg-white p-2 border-b">
                  <User
                    name={selectedUser.name}
                    description={selectedUser.email}
                    avatarProps={{
                      src: selectedUser.avatar,
                    }}
                  />
                </div>
                <div className="bg-white p-6 shadow-lg border-t border-gray-300">
                  <p className="text-2xl font-semibold text-gray-800 mb-4">
                    Información del Evento
                  </p>

                  <div className="mb-6">
                    <p className="text-lg font-medium text-gray-700">
                      <span className="font-bold">Título:</span> Conferencia
                      Anual de Tecnología 2024
                    </p>
                    <p className="text-md text-gray-600">
                      <span className="font-bold">Fecha:</span> 15 de Octubre de
                      2024
                    </p>
                    <p className="text-md text-gray-600">
                      <span className="font-bold">Hora:</span> 10:00 AM - 4:00
                      PM
                    </p>
                    <p className="text-md text-gray-600">
                      <span className="font-bold">Ubicación:</span> Auditorio
                      Principal, Centro de Convenciones, Ciudad de México
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      <span className="font-bold">Descripción:</span>
                    </p>
                    <p className="text-gray-700 mb-4">
                      La Conferencia Anual de Tecnología 2024 reúne a líderes de
                      la industria y expertos en el campo de la tecnología para
                      discutir las últimas innovaciones y tendencias. Este año,
                      el enfoque estará en la inteligencia artificial, el
                      blockchain, y el futuro del trabajo en el sector
                      tecnológico.
                    </p>
                    <p className="text-gray-700">
                      No te pierdas las presentaciones y paneles interactivos,
                      así como las oportunidades para hacer networking con otros
                      profesionales y empresas del sector. Habrá sesiones de
                      preguntas y respuestas para que puedas interactuar
                      directamente con los oradores.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      <span className="font-bold">Agenda:</span>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>10:00 AM - 11:00 AM:</strong> Apertura y
                        Palabras de Bienvenida
                      </li>
                      <li>
                        <strong>11:00 AM - 12:30 PM:</strong> Panel de Expertos
                        en Inteligencia Artificial
                      </li>
                      <li>
                        <strong>12:30 PM - 1:30 PM:</strong> Almuerzo y
                        Networking
                      </li>
                      <li>
                        <strong>1:30 PM - 3:00 PM:</strong> Taller de Blockchain
                        y su Aplicación
                      </li>
                      <li>
                        <strong>3:00 PM - 4:00 PM:</strong> Sesión de Preguntas
                        y Respuestas
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      <span className="font-bold">
                        Participantes Confirmados:
                      </span>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>
                        Dr. Ana Martínez - Experta en Inteligencia Artificial y
                        Aprendizaje Automático
                      </li>
                      <li>
                        Ing. Carlos Gómez - Especialista en Blockchain y
                        Criptomonedas
                      </li>
                      <li>
                        Prof. Laura Fernández - Futurista en Tecnología y Autor
                        de "El Futuro del Trabajo"
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="text-lg font-medium text-gray-700 mb-2">
                      <span className="font-bold">Información Adicional:</span>
                    </p>
                    <p className="text-gray-700">
                      Para más detalles sobre el evento, incluyendo información
                      sobre el registro, patrocinadores y oportunidades de
                      voluntariado, visita nuestro sitio web en{" "}
                      <a href="#" className="text-blue-500 hover:underline">
                        www.conferencia2024.com
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="flex gap-4 justify-center py-4 bg-gray-100 border-t border-gray-200 rounded-b-xl">
              <Button color="primary" className="font-bold">
                Confirmar evento
              </Button>
              <Button color="danger" className="font-bold">
                Rechazar evento
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
