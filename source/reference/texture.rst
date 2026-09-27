.. _api_Texture:

Texture
=======

Inherited: :ref:`Resource<api_Resource>`

.. _api_Texture_description:

Description
-----------

This class can be used to handle texture resource or create them at runtime.



.. _api_Texture_public:

Public Methods
--------------

+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`addSurface<api_Texture_4e3691fd>` (const Texture::Surface & surface)        |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`compress<api_Texture_81e6cbf5>` () const                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`depth<api_Texture_becfa123>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`depthBits<api_Texture_49bd0e6f>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`filtering<api_Texture_69a2cd84>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`flags<api_Texture_8bf1dea0>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`format<api_Texture_5ec1b792>` () const                                      |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`getPixel<api_Texture_09fdc24b>` (int  x, int  y, int  level) const          |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                       ByteArray | :ref:`getPixels<api_Texture_426ad51f>` (int  level) const                         |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`height<api_Texture_ba7e1fc5>` () const                                      |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isArray<api_Texture_15dba62c>` () const                                     |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isCubemap<api_Texture_c4a2f8b5>` () const                                   |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isFeedback<api_Texture_b541d39e>` () const                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            bool | :ref:`isRender<api_Texture_d5862f04>` () const                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`mipCount<api_Texture_cd742e6b>` () const                                    |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`readPixels<api_Texture_e0f93c25>` (int  x, int  y, int  width, int  height) |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`resize<api_Texture_b10ae576>` (int  width, int  height)                     |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setCompress<api_Texture_dfc58e3a>` (int  method)                            |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDepth<api_Texture_e20dc4f6>` (int  depth)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDepthBits<api_Texture_3c15da42>` (int  depth)                            |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setDirty<api_Texture_2847c906>` ()                                          |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFiltering<api_Texture_4b78156d>` (int  type)                             |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFlags<api_Texture_f0316d9c>` (int  flags)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setFormat<api_Texture_e7d6b318>` (int  type)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setHeight<api_Texture_07f98b1e>` (int  height)                              |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setMipCount<api_Texture_d93bc718>` (int  levels)                            |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setWidth<api_Texture_0c8bef39>` (int  width)                                |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                            void | :ref:`setWrap<api_Texture_312c6ae4>` (int  type)                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`sides<api_Texture_7b9cf548>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Texture::Surface<api_Texture_Surface>` & | :ref:`surface<api_Texture_2f0a7bc5>` (int  side)                                  |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`width<api_Texture_53b0478c>` () const                                       |
+-------------------------------------------------+-----------------------------------------------------------------------------------+
|                                             int | :ref:`wrap<api_Texture_b1438fc9>` () const                                        |
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
|  uint32_t | :ref:`maxCubemapSize<api_Texture_f523a4c9>` () |
+-----------+------------------------------------------------+
|  uint32_t | :ref:`maxTextureSize<api_Texture_59b128e0>` () |
+-----------+------------------------------------------------+

.. _api_Texture_methods:

Methods Description
-------------------

.. _api_Texture_4e3691fd:

 void **Texture::addSurface** (:ref:`Texture::Surface<api_Texture_Surface>` & *surface*)

Adds *surface* to the texture. Each texture must contain at least one surface.

----

.. _api_Texture_81e6cbf5:

 int **Texture::compress** () const

Returns compression method.

**See also** setCompress().

----

.. _api_Texture_becfa123:

 int **Texture::depth** () const

Returns depth dimension for the texture.

**See also** setDepth().

----

.. _api_Texture_49bd0e6f:

 int **Texture::depthBits** () const

Returns the number of depth buffer bits.


**Note:** This value is valid only for the depth textures.


**See also** setDepthBits().

----

.. _api_Texture_69a2cd84:

 int **Texture::filtering** () const

Returns filtering type of texture. For more details please see the Texture::FilteringType enum.

**See also** setFiltering().

----

.. _api_Texture_8bf1dea0:

 int **Texture::flags** () const

Returns service flags for the texture.

**See also** setFlags() and Texture::Flags.

----

.. _api_Texture_5ec1b792:

 int **Texture::format** () const

Returns format type of texture. For more details please see the Texture::FormatType enum.

**See also** setFormat().

----

.. _api_Texture_09fdc24b:

 int **Texture::getPixel** (int  *x*, int  *y*, int  *level*) const

Returns pixel color from mip *level* at *x* and *y* position as RGBA integer for example 0x00ff00ff which can be mapped to (0, 255, 0, 255)

----

.. _api_Texture_426ad51f:

 ByteArray **Texture::getPixels** (int  *level*) const

Returns texture data from a mip level.

----

.. _api_Texture_ba7e1fc5:

 int **Texture::height** () const

Returns height for the texture.

**See also** setHeight().

----

.. _api_Texture_15dba62c:

 bool **Texture::isArray** () const

Returns true if texture provides a set of textures; otherwise returns false.


**Note:** For now will always return false.


----

.. _api_Texture_c4a2f8b5:

 bool **Texture::isCubemap** () const

Returns true if the texture is a cube map; otherwise returns false.

----

.. _api_Texture_b541d39e:

 bool **Texture::isFeedback** () const

Returns true if texture marked as a feed back texture; otherwise returns false. The feedback textures can read data from GPU to CPU.

----

.. _api_Texture_d5862f04:

 bool **Texture::isRender** () const

Returns true if texture is can be attached to framebuffer; otherwise returns false.

----

.. _api_Texture_f523a4c9:

 uint32_t **Texture::maxCubemapSize** ()

Returns the maximum cubemap size.

----

.. _api_Texture_59b128e0:

 uint32_t **Texture::maxTextureSize** ()

Returns the maximum texure size.

----

.. _api_Texture_cd742e6b:

 int **Texture::mipCount** () const

Returns the number of MIP levels.

**See also** setMipCount().

----

.. _api_Texture_e0f93c25:

 void **Texture::readPixels** (int  *x*, int  *y*, int  *width*, int  *height*)

Read pixels from GPU at *x* and *y* position with *width* and *height* dimensions into texture data.

----

.. _api_Texture_b10ae576:

 void **Texture::resize** (int  *width*, int  *height*)

Sets new *width* and *height* for the texture.

----

.. _api_Texture_dfc58e3a:

 void **Texture::setCompress** (int  *method*)

Set the compression method.

**See also** compress().

----

.. _api_Texture_e20dc4f6:

 void **Texture::setDepth** (int  *depth*)

Sets new *depth* dimension for the texture.

**See also** depth().

----

.. _api_Texture_3c15da42:

 void **Texture::setDepthBits** (int  *depth*)

Sets the number of *depth* buffer bits.


**Note:** This value is valid only for the *depth* textures.


**See also** depthBits().

----

.. _api_Texture_2847c906:

 void **Texture::setDirty** ()

Marks texture as dirty. That means this texture must be forcefully reloaded.

----

.. _api_Texture_4b78156d:

 void **Texture::setFiltering** (int  *type*)

Sets filtering *type* of texture. For more details please see the Texture::FilteringType enum.

**See also** filtering().

----

.. _api_Texture_f0316d9c:

 void **Texture::setFlags** (int  *flags*)

Sets service *flags* for the texture.

**See also** flags() and Texture::Flags.

----

.. _api_Texture_e7d6b318:

 void **Texture::setFormat** (int  *type*)

Sets format *type* of texture. For more details please see the Texture::FormatType enum.

**See also** format().

----

.. _api_Texture_07f98b1e:

 void **Texture::setHeight** (int  *height*)

Sets new *height* for the texture.

**See also** height().

----

.. _api_Texture_d93bc718:

 void **Texture::setMipCount** (int  *levels*)

Sets the number of MIP levels.

**See also** mipCount().

----

.. _api_Texture_0c8bef39:

 void **Texture::setWidth** (int  *width*)

Sets new *width* for the texture.

**See also** width().

----

.. _api_Texture_312c6ae4:

 void **Texture::setWrap** (int  *type*)

Sets the *type* of warp policy. For more details please see the Texture::WrapType enum.

**See also** wrap().

----

.. _api_Texture_7b9cf548:

 int **Texture::sides** () const

Returns the number of texture sides. In most cases returns 1 but for the cube map will return 6

----

.. _api_Texture_2f0a7bc5:

 :ref:`Texture::Surface<api_Texture::Surface>` & **Texture::surface** (int  *side*)

Returns a surface for the provided side. Each texture must contain at least one surface. Commonly used to set surfaces for the cube maps.

----

.. _api_Texture_53b0478c:

 int **Texture::width** () const

Returns width for the texture.

**See also** setWidth().

----

.. _api_Texture_b1438fc9:

 int **Texture::wrap** () const

Returns the type of warp policy. For more details please see the Texture::WrapType enum.

**See also** setWrap().


