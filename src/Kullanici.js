import React, { useState } from 'react';



function Kullanici() {
    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [editIndex, setEditIndex] = useState(-1);

    const addUser = () => {
        if (firstName && lastName) {
            const newUser = { firstName, lastName };
            setUsers([...users, newUser]);
            setFirstName("");
            setLastName("");
        }
    };

    const deleteUser = (index) => {
        const newUsers = users.filter((_, i) => i !== index);//state ile sanal depoya attık
        setUsers(newUsers);
    };

    const editUser = (index) => {
        setEditIndex(index);
        setFirstName(users[index].firstName);
        setLastName(users[index].lastName);
    };

    const saveUser = () => {
        const updateUsers = users.map((user, index) => index === editIndex ? { firstName, lastName } : user//eşitse ilk kısım eşit değilse ikinci kısmı al
        );
        setUsers(updateUsers);
        setEditIndex(-1);
        setFirstName("");
        setLastName("");
    };
    return (
        <div className="App">
          <h3>Kullanıcı Listesi</h3>
          <div className="input-group" style={{ marginBottom: '10px' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Ad giriniz"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Soyad giriniz"
              value={lastName}
              onChange={(a) => setLastName(a.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={editIndex >= 0 ? saveUser : addUser}
            >
              {editIndex >= 0 ? 'Değişiklikleri Kaydet' : 'Kullanıcı Ekle'}
            </button>
          </div>
      
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.firstName} {user.lastName}
                <button
                  onClick={() => editUser(index)}
                  className="btn btn-outline-warning "
                  style={{ marginRight: '5px' }}
                >
                  Düzenle
                </button>
                <button
                  onClick={() => deleteUser(index)}
                  className="btn btn-outline-danger "
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
      
         
        </div>
      );
      
    }
export default Kullanici;
















