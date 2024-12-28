.. _api_Sprite:

Sprite
======

Inherited: None

.. _api_Sprite_description:

Description
-----------

Sprites usually used in games to display environment and characters in 2D games. This class also supports sprite sheets to contain several images in one container to simplify animation or handle tile maps.



.. _api_Sprite_public:

Public Methods
--------------

+--------------------------------+--------------------------------------------------------------+
|                            int | :ref:`addElement<api_Sprite_addElement>` (Texture * texture) |
+--------------------------------+--------------------------------------------------------------+
|                           void | :ref:`addPage<api_Sprite_addPage>` (Texture * texture)       |
+--------------------------------+--------------------------------------------------------------+
|                           void | :ref:`packSheets<api_Sprite_packSheets>` (int  padding)      |
+--------------------------------+--------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`page<api_Sprite_page>` (int  key = -1) const           |
+--------------------------------+--------------------------------------------------------------+
|                           void | :ref:`setShape<api_Sprite_setShape>` (int  key, Mesh * mesh) |
+--------------------------------+--------------------------------------------------------------+
|        :ref:`Mesh<api_Mesh>` * | :ref:`shape<api_Sprite_shape>` (int  key) const              |
+--------------------------------+--------------------------------------------------------------+



.. _api_Sprite_static:

Static Methods
--------------

None

.. _api_Sprite_methods:

Methods Description
-------------------

.. _api_Sprite_addElement:

 int **Sprite::addElement** (:ref:`Texture<api_Texture>` * *texture*)

Adds new sub *texture* as element to current sprite sheet. All elements will be packed to a single sprite sheet *texture* using Sprite::pack() method. Returns the id of the new element.

**See also** packSheets().

----

.. _api_Sprite_addPage:

 void **Sprite::addPage** (:ref:`Texture<api_Texture>` * *texture*)

Adds a new sprite sheet *texture*.

----

.. _api_Sprite_packSheets:

 void **Sprite::packSheets** (int  *padding*)

Packs all added elements int to a sprite sheets. Parameter *padding* can be used to delimit elements.

**See also** addElement().

----

.. _api_Sprite_page:

 :ref:`Texture<api_Texture>` * **Sprite::page** (int  *key* = -1) const

Returns a sprite sheet texture with *key*.

----

.. _api_Sprite_setShape:

 void **Sprite::setShape** (int  *key*, :ref:`Mesh<api_Mesh>` * *mesh*)

Sets a new *mesh* for the sprite with *key*. The old *mesh* will be deleted and no longer available.

**See also** shape().

----

.. _api_Sprite_shape:

 :ref:`Mesh<api_Mesh>` * **Sprite::shape** (int  *key*) const

Returns a mesh which represents the sprite with *key*.

**See also** setShape().


