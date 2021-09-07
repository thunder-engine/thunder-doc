.. _api_Sprite:
Sprite Class
================

Inherited: :ref:`Resource<api_Resource>`

.. _api_Sprite_description:
Description
-----------

Sprites usually used in games to display environment and characters in 2D games. This class also supports sprite sheets to contain several images in one container to simplify animation or handle tile maps.



.. _api_Sprite_public:
Public Methods
--------------

+-------------------------------+--------------------------------------------------------------+
|           :ref:`int<api_int>` | :ref:`addElement<api_Sprite_addElement>` (Texture * texture) |
+-------------------------------+--------------------------------------------------------------+
|       :ref:`Mesh<api_Mesh>` * | :ref:`mesh<api_Sprite_mesh>` (int  key) const                |
+-------------------------------+--------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`pack<api_Sprite_pack>` (int  padding)                  |
+-------------------------------+--------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`setMesh<api_Sprite_setMesh>` (int  key, Mesh * mesh)   |
+-------------------------------+--------------------------------------------------------------+
|         :ref:`void<api_void>` | :ref:`setTexture<api_Sprite_setTexture>` (Texture * texture) |
+-------------------------------+--------------------------------------------------------------+
| :ref:`Texture<api_Texture>` * | :ref:`texture<api_Sprite_texture>` () const                  |
+-------------------------------+--------------------------------------------------------------+



.. _api_Sprite_static:
Static Methods
--------------

None

.. _api_Sprite_methods:
Methods Description
-------------------

.. _api_Sprite_addElement:

:ref:`int<api_int>`  **Sprite::addElement** (:ref:`Texture<api_Texture>` * *texture*)

Adds new sub *texture* as element to current sprite sheet. All elements will be packed to a single sprite sheet *texture* using Sprite::pack() method. Returns the id of the new element.

**See also** pack().

----

.. _api_Sprite_mesh:

:ref:`Mesh<api_Mesh>` * **Sprite::mesh** (:ref:`int<api_int>`  *key*) const

Returns a mesh which represents the sprite with *key*.

**See also** setMesh().

----

.. _api_Sprite_pack:

:ref:`void<api_void>`  **Sprite::pack** (:ref:`int<api_int>`  *padding*)

Packs all added elements int to a single sprite sheet. Parameter *padding* can be used to delimit elements.

**See also** addElement().

----

.. _api_Sprite_setMesh:

:ref:`void<api_void>`  **Sprite::setMesh** (:ref:`int<api_int>`  *key*, :ref:`Mesh<api_Mesh>` * *mesh*)

Sets a new *mesh* for the sprite with *key*. The old *mesh* will be deleted and no longer available.

**See also** *mesh*().

----

.. _api_Sprite_setTexture:

:ref:`void<api_void>`  **Sprite::setTexture** (:ref:`Texture<api_Texture>` * *texture*)

Sets a new sprite sheet *texture*.

**See also** *texture*().

----

.. _api_Sprite_texture:

:ref:`Texture<api_Texture>` * **Sprite::texture** () const

Returns a sprite sheet texture.

**See also** setTexture().

----


