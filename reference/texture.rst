.. _api_Texture:

Texture
=======

Inherited: None

.. _api_Texture_description:

Description
-----------

This class can be used to handle texture resource or create them at runtime.



.. _api_Texture_public:

Public Methods
--------------

+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`addSurface<api_Texture_9fa3015d>` (const Texture::Surface & surface)        |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`depth<api_Texture_8e70c623>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`depthBits<api_Texture_e21cb54a>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`filtering<api_Texture_0e5c7afd>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`flags<api_Texture_6f4c7351>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`format<api_Texture_3cafe054>` () const                                      |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`getPixel<api_Texture_d107b938>` (int  x, int  y, int  level) const          |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                       ByteArray | :ref:`getPixels<api_Texture_35810a7e>` (int  level) const                         |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`height<api_Texture_ec35fa4b>` () const                                      |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isArray<api_Texture_c8a0b614>` () const                                     |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isCubemap<api_Texture_49a2e713>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isFeedback<api_Texture_1e70bca3>` () const                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isRender<api_Texture_cfedab01>` () const                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`mipCount<api_Texture_a8719306>` () const                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`readPixels<api_Texture_d4f6b37a>` (int  x, int  y, int  width, int  height) |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`resize<api_Texture_d57fb916>` (int  width, int  height)                     |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setCompress<api_Texture_3051ae27>` (int  method)                            |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDepth<api_Texture_7f85aeb1>` (int  depth)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDepthBits<api_Texture_29cb86e1>` (int  depth)                            |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDirty<api_Texture_29c6817a>` ()                                          |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFiltering<api_Texture_9b2a0567>` (int  type)                             |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFlags<api_Texture_b49dc7fa>` (int  flags)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFormat<api_Texture_d7819fe3>` (int  type)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setHeight<api_Texture_504b6c83>` (int  height)                              |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setWidth<api_Texture_e40c9758>` (int  width)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setWrap<api_Texture_fc8b2a6e>` (int  type)                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`sides<api_Texture_9ce7b463>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Texture::Surface<api_Texture_Surface>` & | :ref:`surface<api_Texture_ced60832>` (int  side)                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`width<api_Texture_1a0e695b>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`wrap<api_Texture_9b783e25>` () const                                        |
+-------------------------------------------------+-----------------------------------------------------------------------------------+

.. _api_Texture_enums:

Public Enums
------------

.. _api_Texture_FilteringType:

**enum Texture::FilteringType**

+--------------------+-------+---------------------------------------------------------------------------------+
|           Constant | Value | Description                                                                     |
+--------------------+-------+---------------------------------------------------------------------------------+
|      Texture::None | 0     | Texture samples draw as is.                                                     |
+--------------------+-------+---------------------------------------------------------------------------------+
|  Texture::Bilinear | 1     | Texture samples are averaged.                                                   |
+--------------------+-------+---------------------------------------------------------------------------------+
| Texture::Trilinear | 2     | Texture samples are averaged and also interpolated from adjacent mipmap levels. |
+--------------------+-------+---------------------------------------------------------------------------------+

.. _api_Texture_Flags:

**enum Texture::Flags**

+-------------------+--------+---------------------------------------------------------+
|          Constant | Value  | Description                                             |
+-------------------+--------+---------------------------------------------------------+
|   Texture::Render | (1<<0) | This texture is used as render target in frame buffers. |
+-------------------+--------+---------------------------------------------------------+
| Texture::Feedback | (1<<1) | The feedback textures can read data from GPU to CPU.    |
+-------------------+--------+---------------------------------------------------------+

.. _api_Texture_FormatType:

**enum Texture::FormatType**

+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|                Constant | Value | Description                                                                                                                              |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|             Texture::R8 | 0     | Single channel(Red) texture. 8-bit integer                                                                                               |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|           Texture::RGB8 | 1     | Color texture format. 8 bit integer per channel. 24-bits in total.                                                                       |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|          Texture::RGBA8 | 2     | Color texture format with alpha channel. 8-bit integer per channel. 32-bits in total.                                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|        Texture::RGB10A2 | 3     | 10 bits each for RGB, 2 for Alpha.                                                                                                       |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
| Texture::R11G11B10Float | 4     | This uses special 11 and 10-bit floating-point values. This is very economical for floating-point values (using only 32-bits per value). |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|    Texture::RGBA32Float | 5     | Color texture and alpha with floating-point values. It uses 32-bit floating-point values per channel.                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|    Texture::RGBA16Float | 6     | Color texture and alpha with floating-point values. It uses 16-bit floating-point values per channel.                                    |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+
|          Texture::Depth | 7     | Depth buffer texture format. Number bits per pixel depend on graphical settings and hardware. Can be 16, 24 or 32-bit per pixel.         |
+-------------------------+-------+------------------------------------------------------------------------------------------------------------------------------------------+

.. _api_Texture_WrapType:

**enum Texture::WrapType**

Wrap mode for textures.

+-------------------+-------+--------------------------------------------------------------------------------------------+
|          Constant | Value | Description                                                                                |
+-------------------+-------+--------------------------------------------------------------------------------------------+
|    Texture::Clamp | 0     | Clamps the texture to the last pixel at the edge.                                          |
+-------------------+-------+--------------------------------------------------------------------------------------------+
|   Texture::Repeat | 1     | Tiles the texture, creating a repeating pattern.                                           |
+-------------------+-------+--------------------------------------------------------------------------------------------+
| Texture::Mirrored | 2     | Tiles the texture, creating a repeating pattern by mirroring it at every integer boundary. |
+-------------------+-------+--------------------------------------------------------------------------------------------+



.. _api_Texture_static:

Static Methods
--------------

+-----------+------------------------------------------------+
|  uint32_t | :ref:`maxCubemapSize<api_Texture_70684bc3>` () |
+-----------+------------------------------------------------+
|  uint32_t | :ref:`maxTextureSize<api_Texture_e0a81c59>` () |
+-----------+------------------------------------------------+

.. _api_Texture_methods:

Methods Description
-------------------

.. _api_Texture_9fa3015d:

 void **Texture::addSurface** (:ref:`Texture::Surface<api_Texture_Surface>` & *surface*)

Adds *surface* to the texture. Each texture must contain at least one surface.

----

.. _api_Texture_8e70c623:

 int **Texture::depth** () const

Returns depth dimension for the texture.

**See also** setDepth().

----

.. _api_Texture_e21cb54a:

 int **Texture::depthBits** () const

Returns the number of depth buffer bits.


**Note:** This value is valid only for the depth textures.


**See also** setDepthBits().

----

.. _api_Texture_0e5c7afd:

 int **Texture::filtering** () const

Returns filtering type of texture. For more details please see the Texture::FilteringType enum.

**See also** setFiltering().

----

.. _api_Texture_6f4c7351:

 int **Texture::flags** () const

Returns service flags for the texture.

**See also** setFlags() and Texture::Flags.

----

.. _api_Texture_3cafe054:

 int **Texture::format** () const

Returns format type of texture. For more details please see the Texture::FormatType enum.

**See also** setFormat().

----

.. _api_Texture_d107b938:

 int **Texture::getPixel** (int  *x*, int  *y*, int  *level*) const

Returns pixel color from mip *level* at *x* and *y* position as RGBA integer for example 0x00ff00ff which can be mapped to (0, 255, 0, 255)

----

.. _api_Texture_35810a7e:

 ByteArray **Texture::getPixels** (int  *level*) const

Returns texture data from a mip level.

----

.. _api_Texture_ec35fa4b:

 int **Texture::height** () const

Returns height for the texture.

**See also** setHeight().

----

.. _api_Texture_c8a0b614:

 bool **Texture::isArray** () const

Returns true if texture provides a set of textures; otherwise returns false.


**Note:** For now will always return false.


----

.. _api_Texture_49a2e713:

 bool **Texture::isCubemap** () const

Returns true if the texture is a cube map; otherwise returns false.

----

.. _api_Texture_1e70bca3:

 bool **Texture::isFeedback** () const

Returns true if texture marked as a feed back texture; otherwise returns false. The feedback textures can read data from GPU to CPU.

----

.. _api_Texture_cfedab01:

 bool **Texture::isRender** () const

Returns true if texture is can be attached to framebuffer; otherwise returns false.

----

.. _api_Texture_70684bc3:

 uint32_t **Texture::maxCubemapSize** ()

Returns the maximum cubemap size.

----

.. _api_Texture_e0a81c59:

 uint32_t **Texture::maxTextureSize** ()

Returns the maximum texure size.

----

.. _api_Texture_a8719306:

 int **Texture::mipCount** () const

Returns the number of MIP levels.

----

.. _api_Texture_d4f6b37a:

 void **Texture::readPixels** (int  *x*, int  *y*, int  *width*, int  *height*)

Read pixels from GPU at *x* and *y* position with *width* and *height* dimensions into texture data.

----

.. _api_Texture_d57fb916:

 void **Texture::resize** (int  *width*, int  *height*)

Sets new *width* and *height* for the texture.

----

.. _api_Texture_3051ae27:

 void **Texture::setCompress** (int  *method*)

Set the compression method.

----

.. _api_Texture_7f85aeb1:

 void **Texture::setDepth** (int  *depth*)

Sets new *depth* dimension for the texture.

**See also** depth().

----

.. _api_Texture_29cb86e1:

 void **Texture::setDepthBits** (int  *depth*)

Sets the number of *depth* buffer bits.


**Note:** This value is valid only for the *depth* textures.


**See also** depthBits().

----

.. _api_Texture_29c6817a:

 void **Texture::setDirty** ()

Marks texture as dirty. That means this texture must be forcefully reloaded.

----

.. _api_Texture_9b2a0567:

 void **Texture::setFiltering** (int  *type*)

Sets filtering *type* of texture. For more details please see the Texture::FilteringType enum.

**See also** filtering().

----

.. _api_Texture_b49dc7fa:

 void **Texture::setFlags** (int  *flags*)

Sets service *flags* for the texture.

**See also** flags() and Texture::Flags.

----

.. _api_Texture_d7819fe3:

 void **Texture::setFormat** (int  *type*)

Sets format *type* of texture. For more details please see the Texture::FormatType enum.

**See also** format().

----

.. _api_Texture_504b6c83:

 void **Texture::setHeight** (int  *height*)

Sets new *height* for the texture.

**See also** height().

----

.. _api_Texture_e40c9758:

 void **Texture::setWidth** (int  *width*)

Sets new *width* for the texture.

**See also** width().

----

.. _api_Texture_fc8b2a6e:

 void **Texture::setWrap** (int  *type*)

Sets the *type* of warp policy. For more details please see the Texture::WrapType enum.

**See also** wrap().

----

.. _api_Texture_9ce7b463:

 int **Texture::sides** () const

Returns the number of texture sides. In most cases returns 1 but for the cube map will return 6

----

.. _api_Texture_ced60832:

 :ref:`Texture::Surface<api_Texture::Surface>` & **Texture::surface** (int  *side*)

Returns a surface for the provided side. Each texture must contain at least one surface. Commonly used to set surfaces for the cube maps.

----

.. _api_Texture_1a0e695b:

 int **Texture::width** () const

Returns width for the texture.

**See also** setWidth().

----

.. _api_Texture_9b783e25:

 int **Texture::wrap** () const

Returns the type of warp policy. For more details please see the Texture::WrapType enum.

**See also** setWrap().


